import {
  getBlogDetails,
  getAllBlogs,
} from '@/app/blog/server-functions/getBlogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map(({ title }) => ({ title }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const blog = await getBlogDetails(decodedTitle);

  if (!blog) {
    return notFound();
  }

  return (
    <article className='px-4 lg:px-96 py-8'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold mb-4 text-black dark:text-white'>
          {blog.title}
        </h1>

        <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6'>
          <time dateTime={blog.created_at.toISOString()}>
            {blog.created_at.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          {blog.tags && blog.tags.length > 0 && (
            <div className='flex gap-2'>
              {blog.tags.map(tag => (
                <span
                  key={tag}
                  className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {blog.summary && (
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-6 italic'>
            {blog.summary}
          </p>
        )}

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className='w-full h-64 object-cover rounded-lg mb-8'
          />
        )}
      </header>

      <div
        className='markdown-content max-w-none'
        dangerouslySetInnerHTML={{ __html: blog.html }}
      />
    </article>
  );
}
