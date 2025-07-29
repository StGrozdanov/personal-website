'use server';

import 'server-only';
import { getAllMarkdownContent, getMarkdownContent } from '@/lib/markdown';

export type BlogDetails = {
  title: string;
  content: string;
  html: string;
  created_at: Date;
  summary?: string;
  image?: string;
};

/**
 * Get blog details for a specific blog
 * @param title - The blog title slug to get details for
 * @returns {BlogDetails | undefined} - An object of blog data
 */
export async function getBlogDetails(
  title: string,
): Promise<BlogDetails | undefined> {
  try {
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    const result = await getMarkdownContent('blog', slug);

    if (!result) {
      return undefined;
    }

    return {
      title: result.frontmatter.title,
      content: result.content,
      html: result.html,
      created_at: new Date(result.frontmatter.date),
      summary: result.frontmatter.summary,
      image: result.frontmatter.image,
    };
  } catch (error) {
    console.error(`Error getting blog details for ${title}:`, error);
    return undefined;
  }
}

export type Blog = {
  title: string;
  created_at: Date;
};

/**
 * Get all blogs from markdown files
 * @returns {Blog[]} - An array of blogs
 */
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const allContent = await getAllMarkdownContent('blog');

    return allContent
      .map(content => ({
        title: content.frontmatter.title,
        created_at: new Date(content.frontmatter.date),
      }))
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
  } catch (error) {
    console.error('Error getting all blogs:', error);
    return [];
  }
}
