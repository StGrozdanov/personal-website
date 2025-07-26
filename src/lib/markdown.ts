import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

/**
 * Simple markdown processor using well-established libraries
 */
class MarkdownProcessor {
  private md: MarkdownIt;

  constructor() {
    this.md = MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch {
            // Ignore highlighting errors
          }
        }
        return ''; // Use external default escaping
      },
    });
  }

  /**
   * Process markdown content to HTML
   * @param content - Raw markdown content
   * @returns HTML string
   */
  processMarkdown(content: string): string {
    return this.md.render(content);
  }

  /**
   * Parse a markdown file with frontmatter
   * @param filePath - Path to markdown file
   * @returns Promise resolving to parsed content
   */
  async parseMarkdownFile(filePath: string) {
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data: frontmatter, content } = matter(fileContent);
      
      const html = this.processMarkdown(content);

      return {
        frontmatter,
        content,
        html,
      };
    } catch (error) {
      console.error(`Error parsing markdown file ${filePath}:`, error);
      throw error;
    }
  }
}

// Singleton instance
const markdownProcessor = new MarkdownProcessor();

export { markdownProcessor };

/**
 * Get content files from directory
 * @param contentType - Type of content (blog, projects, work)
 * @returns Promise resolving to array of file slugs
 */
export async function getContentFiles(
  contentType: 'blog' | 'projects' | 'work',
): Promise<string[]> {
  const contentDir = path.join(process.cwd(), 'content', contentType);

  try {
    const files = await fs.readdir(contentDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    console.error(`Error reading content directory ${contentDir}:`, error);
    return [];
  }
}

/**
 * Get markdown content for specific item
 * @param contentType - Type of content (blog, projects, work)
 * @param slug - Content slug
 * @returns Promise resolving to parsed content
 */
export async function getMarkdownContent(
  contentType: 'blog' | 'projects' | 'work',
  slug: string,
) {
  const filePath = path.join(
    process.cwd(),
    'content',
    contentType,
    `${slug}.md`,
  );

  const processor = await markdownProcessor.parseMarkdownFile(filePath);

  return processor;
}

/**
 * Get all markdown content from directory
 * @param contentType - Type of content (blog, projects, work)
 * @returns Promise resolving to array of parsed content
 */
export async function getAllMarkdownContent(
  contentType: 'blog' | 'projects' | 'work',
) {
  const slugs = await getContentFiles(contentType);

  const content = await Promise.all(
    slugs.map(async slug => {
      const parsed = await getMarkdownContent(contentType, slug);
      return {
        slug,
        ...parsed,
      };
    }),
  );

  return content;
}
