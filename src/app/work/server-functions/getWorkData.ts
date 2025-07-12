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
    product: 'Mansion Casinos',
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
    product: 'Travel Go',
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
  {
    product: 'Clear Treasury',
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
  {
    product: 'IC Consult',
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
  logo: string;
  image: string;
  summary: string;
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
        product: 'Travel Go',
        logo: '/travel-go.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
        summary: 'Travel booking platform',
      },
      {
        product: 'Mansion Casinos',
        logo: '/mansion.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/casino.com.png',
        summary:
          'One of the biggest online casino platforms in the world (casino.com)',
      },
      {
        product: 'Clear Treasury',
        logo: '/clear-treasury.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
        summary:
          'International Payments and FX strategy for Business and Personal clients',
      },
      {
        product: 'IC Consult',
        logo: '/ic-consult.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
        summary: 'Platform for the Mercedes-Benz APIs and services',
      },
    ]);
  });
}
