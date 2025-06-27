'use server';

import 'server-only';
// import { dbQuery } from '@/lib/db/pool';

export type WorkData = {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  techStack: string[];
  contribution: string[];
  images: string[];
};

/**
 * Get all work data from the database
 * @returns {WorkData[]} - An array of work data
 */
export async function getWorkData(): Promise<WorkData[]> {
  //   return dbQuery(`SELECT * FROM work_data;`);
  return new Promise((resolve) => {
    resolve([
      {
        product: 'Product 1',
        started_at: new Date(),
        ended_at: null,
        concept: 'Concept 1',
        techStack: ['Tech 1', 'Tech 2'],
        contribution: ['Contribution 1'],
        images: ['Image 1', 'Image 2'],
      },
    ]);
  });
}
