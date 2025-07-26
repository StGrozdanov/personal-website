'use server';

import 'server-only';
import { getAllMarkdownContent, getMarkdownContent } from '@/lib/markdown';

export type WorkDetails = {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  tech_stack: string[];
  contribution: string[];
  images: string[];
};

/**
 * Get work details for a specific work experience
 * @param product - The work experience to get details for
 * @returns {WorkDetails} - A work data
 */
export async function getWorkDetails(
  product: string,
): Promise<WorkDetails | undefined> {
  try {
    const slug = product
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    const result = await getMarkdownContent('work', slug);

    if (!result) {
      return undefined;
    }

    const workDetails: WorkDetails = {
      product,
      started_at: new Date(result.frontmatter.started_at),
      ended_at:
        result.frontmatter.ended_at ?
          new Date(result.frontmatter.ended_at)
        : null,
      concept: result.frontmatter.concept,
      tech_stack: result.frontmatter.tech_stack,
      contribution: result.frontmatter.contribution,
      images: result.frontmatter.images,
    };

    return workDetails;
  } catch (error) {
    console.error(`Error getting work details for ${product}:`, error);
    return undefined;
  }
}

export type WorkExperience = {
  product: string;
  logo: string;
  image: string;
  summary: string;
};

/**
 * Get all work experiences from markdown files
 * @returns {WorkExperience[]} - An array of work experiences
 */
export async function getAllWorkExperiences(): Promise<WorkExperience[]> {
  try {
    const allContent = await getAllMarkdownContent('work');

    return allContent
      .map(content => ({
        product: content.frontmatter.product,
        logo: content.frontmatter.logo,
        image: content.frontmatter.image,
        summary: content.frontmatter.summary,
      }))
      .sort((a, b) => {
        // Sort by start date, most recent first
        const aDate = new Date(
          allContent.find(c => c.frontmatter.product === a.product)?.frontmatter
            .started_at || Date.now(),
        );
        const bDate = new Date(
          allContent.find(c => c.frontmatter.product === b.product)?.frontmatter
            .started_at || Date.now(),
        );
        return bDate.getTime() - aDate.getTime();
      });
  } catch (error) {
    console.error('Error getting all work experiences:', error);
    return [];
  }
}
