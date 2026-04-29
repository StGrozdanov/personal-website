import { getAllBlogs } from './server-functions/getBlogData';
import SearchInput from '../_components/SearchInput/SearchInput';

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === 'string' ? params.q.toLowerCase() : '';
  
  const blogs = await getAllBlogs();

  const filteredBlogs = blogs.filter(
    blog =>
      blog.title.toLowerCase().includes(q) ||
      blog.summary.toLowerCase().includes(q)
  );

  return (
    <section className='px-4 pb-20 lg:px-96 font-inter'>
      <h1 className='text-4xl font-semibold mb-6 text-black dark:text-white'>
        Tech Blog
      </h1>
      
      <SearchInput />

      <section className='flex flex-col gap-8 slide-enter'>
        {filteredBlogs.map(blog => (
          <article key={blog.title} className='slide-enter'>
            <a
              href={`/blog/${blog.title}`}
              className='block group no-underline'
            >
              <div className='flex flex-col gap-1'>
                <h2 className='text-xl font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors'>
                  {blog.title}
                </h2>
                
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                
                <p className='text-gray-600 dark:text-gray-300 mt-2 leading-relaxed'>
                  {blog.summary}
                </p>
              </div>
            </a>
          </article>
        ))}
        {filteredBlogs.length === 0 && blogs.length > 0 && (
          <p className='text-gray-500'>No posts found matching &quot;{q}&quot;.</p>
        )}
      </section>
    </section>
  );
}

