'use server';

import 'server-only';
// import { dbQuery } from '@/lib/db/pool';

export type BlogDetails = {
  title: string;
  content: string;
  created_at: Date;
};

const blogDetails: BlogDetails[] = [
  {
    title: 'Blockchain and Future Use Cases',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2021-12-12'),
  },
  {
    title: 'AI and Future Use Cases',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2025-06-06'),
  },
  {
    title: 'Building a Startup - Digital Finance Part I',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2025-06-06'),
  },
];

/**
 * Get blog details for a specific blog
 * @param blog - The blog to get details for
 * @returns {BlogDetails} - An object of blog data
 */
export async function getBlogDetails(
  title: string,
): Promise<BlogDetails | undefined> {
  //   return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve(blogDetails.find(blog => blog.title === title));
  });
}

export type Blog = {
  title: string;
  created_at: Date;
};

/**
 * Get all blogs from the database
 * @returns {Blog[]} - An array of blogs
 */
export async function getAllBlogs(): Promise<Blog[]> {
  // return dbQuery(`SELECT * FROM work_data;`);
  return new Promise(resolve => {
    resolve([
      {
        title: 'Blockchain and Future Use Cases',
        created_at: new Date('2021-12-12'),
      },
      {
        title: 'AI and Future Use Cases',
        created_at: new Date('2025-06-06'),
      },
      {
        title: 'Building a Startup - Digital Finance Part I',
        created_at: new Date('2025-06-06'),
      },
    ]);
  });
}
