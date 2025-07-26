import { getAllBlogs } from './server-functions/getBlogData';

export default async function Blog() {
  const blogs = await getAllBlogs();
  return (
    <section className='px-4 lg:px-96'>
      <h1 className='text-4xl font-semibold mb-10 md:mb-20 text-black dark:text-white font-inter'>
        Blog
      </h1>
      <section className='flex flex-col gap-4 slide-enter'>
        {blogs.map(blog => (
          <article key={blog.title} className='slide-enter'>
            <a
              href={`/blog/${blog.title}`}
              className='item block font-medium mb-2 no-underline'
            >
              <li className='no-underline flex flex-col md:flex-row gap-2 md:items-center text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 transition-colors duration-300'>
                <div className='title text-lg leading-[1.2em] flex gap-2 flex-wrap'>
                  <span className='align-middle'>{blog.title}</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='text-sm opacity-50 whitespace-nowrap'>
                    {blog.created_at.toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </li>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}
