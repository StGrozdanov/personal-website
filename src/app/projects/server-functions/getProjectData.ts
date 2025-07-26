'use server';

import 'server-only';
// import { dbQuery } from '@/lib/db/pool';

export type ProjectDetails = {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  techStack: string[];
  images: string[];
};

const projectDetails: ProjectDetails[] = [
  {
    product: 'All the best recipes',
    started_at: new Date('2021-12-12'),
    ended_at: new Date(),
    concept:
      'A platform for creating and sharing tech podcasts. It is a platform for creating and sharing tech podcasts. Unleash your creativity and share your tech podcast with the world.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    images: [
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/mansion.com.png',
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/casino.com.png',
    ],
  },
  {
    product: 'Digital Finance',
    started_at: new Date('2025-06-06'),
    ended_at: new Date(),
    concept:
      'A platform for creating and sharing tech podcasts. It is a platform for creating and sharing tech podcasts. Unleash your creativity and share your tech podcast with the world.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    images: [
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
      'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-fc0dfa69-26e4-49d3-9fa4-b759bcfdc58f',
    ],
  },
];

/**
 * Get project details for a specific product
 * @param product - The product to get details for
 * @returns {ProjectDetails} - An object of project data
 */
export async function getProjectDetails(product: string): Promise<ProjectDetails[]> {
  //   return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve(projectDetails.filter(project => project.product === product));
  });
}

export type Project = {
  product: string;
  logo: string;
  image: string;
  summary: string;
};

/**
 * Get all projects from the database
 * @returns {Project[]} - An array of projects
 */
export async function getAllProjects(): Promise<Project[]> {
  // return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve([
      {
        product: 'All the best recipes',
        logo: '/all-the-best-recipes.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/job-TechPods-91d71edc-44d1-4106-93c4-4e49e043b32e',
        summary: 'Recipe website that we use in our family',
      },
      {
        product: 'Digital Finance',
        logo: '/digital-finance.png',
        image: 'https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/casino.com.png',
        summary: 'Tracking and growing investments',
      },
    ]);
  });
}
