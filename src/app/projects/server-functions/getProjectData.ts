'use server';

import 'server-only';
import { getAllMarkdownContent, getMarkdownContent } from '@/lib/markdown';

export type ProjectDetails = {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  tech_stack: string[];
  images: string[];
  url: string;
  repository: string[];
};

/**
 * Get project details for a specific product
 * @param product - The product to get details for
 * @returns {ProjectDetails} - A project data
 */
export async function getProjectDetails(
  product: string,
): Promise<ProjectDetails | undefined> {
  try {
    const slug = product
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    const result = await getMarkdownContent('projects', slug);

    if (!result) {
      return undefined;
    }

    const projectDetails: ProjectDetails = {
      product,
      started_at: new Date(result.frontmatter.started_at),
      ended_at: new Date(result.frontmatter.ended_at),
      concept: result.frontmatter.concept,
      tech_stack: result.frontmatter.tech_stack,
      images: result.frontmatter.images,
      url: result.frontmatter.url,
      repository: result.frontmatter.repository,
    };

    return projectDetails;
  } catch (error) {
    console.error(`Error getting project details for ${product}:`, error);
    return undefined;
  }
}

export type Project = {
  product: string;
  logo: string;
  image: string;
  summary: string;
};

/**
 * Get all projects from markdown files
 * @returns {Project[]} - An array of projects
 */
export async function getAllProjects(): Promise<Project[]> {
  try {
    const allContent = await getAllMarkdownContent('projects');

    return allContent.map(content => ({
      product: content.frontmatter.product,
      logo: content.frontmatter.logo,
      image: content.frontmatter.image,
      summary: content.frontmatter.summary,
    }));
  } catch (error) {
    console.error('Error getting all projects:', error);
    return [];
  }
}
