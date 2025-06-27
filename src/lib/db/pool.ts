/* eslint @typescript-eslint/no-explicit-any: 0 */

'use server';

import 'server-only';
import { createPool } from './pg';
import logger from '@/lib/log/logger';

import type { QueryResult } from 'pg';

type QueryReducerArray = [string, any[], number];

const pool = createPool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 2000,
  query_timeout: 2000,
  statement_timeout: 2000,
});

/**
 * Gets a query with a named parameters and converts it
 * in a format expected from the pg library - $param with array args
 * @param parameterizedSql: the named query
 * @param params: object with the named params
 * @returns values: array of values
 * @returns text: the modified sql query as the pg library expects it
 */
const queryConvert = (parameterizedSql: string, params: object) => {
  const [text, values] = Object.entries(params).reduce(
    ([sql, array, index], [key, value]) =>
      [
        sql.replaceAll(`:${key}`, `$${index}`),
        [...array, value],
        index + 1,
      ] as QueryReducerArray,
    [parameterizedSql, [], 1] as QueryReducerArray,
  );
  return { text, values };
};

/**
 * Accepts a query along with named parameters.
 * Tracks the performance of every sql query and logs it.
 * @returns isEmpty: is there a result from the query?
 * @returns response: the query rows.
 * @returns affectedRows: the number of rows affected by the query
 */
export const dbQuery = async (sqlQuery: string, args?: object) => {
  const start = Date.now();
  const connection = await pool.connect();
  let result: QueryResult;

  try {
    if (args) {
      const { text, values } = queryConvert(sqlQuery, args);
      result = await connection.query(text, values);
    } else {
      result = await connection.query(sqlQuery);
    }
  } catch (error) {
    logger.error('Error executing DB query', { error, sqlQuery });
    return undefined;
  } finally {
    connection.release();
  }

  logger.info('Executed DB query', {
    sqlQuery,
    duration: Date.now() - start + 'ms',
    rows: result.rowCount,
  });

  return result;
};
