'use server';

import 'server-only';
// import { dbQuery } from '@/lib/db/pool';

export type WorkDetails = {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  techStack: string[];
  contribution: string[];
  images: string[];
};

const workDetails: WorkDetails[] = [
  {
    product: 'Mansion',
    started_at: new Date('2022-09-11'),
    ended_at: new Date('2023-10-31'),
    concept:
      'Mansion is a platform for creating and sharing tech podcasts. It is a platform for creating and sharing tech podcasts. Unleash your creativity and share your tech podcast with the world.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    contribution: [
      'Developed and maintained the frontend and backend of the platform.',
      'Implemented new features and bug fixes.',
      'Optimized the platform for better performance and scalability.',
    ],
    images: [
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/mansion.com.png',
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/casino.com.png',
    ],
  },
  {
    product: 'TechPods',
    started_at: new Date('2023-11-01'),
    ended_at: new Date('2024-11-19'),
    concept:
      'TechPods is a platform for creating and sharing tech podcasts. It is a platform for creating and sharing tech podcasts. Unleash your creativity and share your tech podcast with the world.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    contribution: [
      'Developed and maintained the frontend and backend of the platform.',
      'Implemented new features and bug fixes.',
      'Optimized the platform for better performance and scalability.',
    ],
    images: [
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-fc0dfa69-26e4-49d3-9fa4-b759bcfdc58f',
    ],
  },
];

/**
 * Get work details for a specific product
 * @param product - The product to get details for
 * @returns {WorkDetails} - An object of work data
 */
export async function getWorkDetails(product: string): Promise<WorkDetails[]> {
  //   return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve(workDetails.filter(work => work.product === product));
  });
}

export type WorkExperience = {
  product: string;
  image: string;
};

/**
 * Get all work experiences from the database
 * @returns {WorkExperience[]} - An array of work experiences
 */
export async function getAllWorkExperiences(): Promise<WorkExperience[]> {
  // return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve([
      {
        product: 'Mansion',
        image:
          'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/mansion.com.png',
      },
      {
        product: 'TechPods',
        image:
          'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
      },
    ]);
  });
}
