import { Pool, PoolConfig } from 'pg';

/**
 * Creates a new pool of connections to the database.
 * @param config - The configuration for the pool.
 * @returns A new pool of connections to the database.
 */
export const createPool = (config: PoolConfig) => new Pool(config);