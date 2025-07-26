import {
  getProjectDetails,
  getAllProjects,
} from '@/app/projects/server-functions/getProjectData';
import { getMarkdownContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(({ product }) => ({ product }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const decodedProduct = decodeURIComponent(product);

  const project = await getProjectDetails(decodedProduct);

  if (!project) {
    return notFound();
  }

  const slug = decodedProduct
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  const markdownContent = await getMarkdownContent('projects', slug);

  return (
    <article className='px-4 lg:px-96 py-8'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold mb-4 text-black dark:text-white'>
          {project.product}
        </h1>

        <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6'>
          <div className='flex items-center gap-2'>
            <span>Started:</span>
            <time dateTime={project.started_at.toISOString()}>
              {project.started_at.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </time>
          </div>

          {project.ended_at && (
            <div className='flex items-center gap-2'>
              <span>Completed:</span>
              <time dateTime={project.ended_at.toISOString()}>
                {project.ended_at.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            </div>
          )}

          {markdownContent?.frontmatter.ended_at && (
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                markdownContent.frontmatter.ended_at ?
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}
            >
              {markdownContent.frontmatter.ended_at ?
                'Completed'
              : 'In Progress'}
            </span>
          )}
        </div>

        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className='mb-6'>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2'>
              Tech Stack:
            </h3>
            <div className='flex flex-wrap gap-2'>
              {project.tech_stack.map(tech => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className='flex gap-4 mb-6'>
          {markdownContent?.frontmatter.url && (
            <a
              href={markdownContent.frontmatter.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              🌐 Live Demo
            </a>
          )}

          {markdownContent.frontmatter.repository && markdownContent.frontmatter.repository.map(
            (repo: string, index: number) => (
              <a
                href={repo}
                key={index + repo}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors'
              >
                📁 Source Code {index === 0 ? '' : `Part ${index + 1}`}
              </a>
            ),
          )}
        </div>

        {project.images && project.images.length > 0 && (
          <Image
            src={project.images[0]}
            alt={project.product}
            width={800}
            height={400}
            className='w-full h-64 object-cover rounded-lg mb-8'
          />
        )}
      </header>

      {markdownContent && (
        <div
          className='markdown-content max-w-none'
          dangerouslySetInnerHTML={{ __html: markdownContent.html }}
        />
      )}
    </article>
  );
}
