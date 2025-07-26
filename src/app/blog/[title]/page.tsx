import {
  getAllBlogs,
  getBlogDetails,
} from '@/app/blog/server-functions/getBlogData';

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map(({ title }) => ({ title }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const blogTitle = decodeURI(title);
  const blog = await getBlogDetails(blogTitle);

  return (
    <section className='px-4 lg:px-72'>
      <h1 className='text-4xl font-semibold mb-10 md:mb-20 text-black dark:text-white font-inter text-center'>
        {blog?.title}
      </h1>
      <article className='text-gray-600 dark:text-white'>
        {blog?.content}
      </article>
    </section>
  );
}
