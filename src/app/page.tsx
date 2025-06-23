import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='px-4 py-8 lg:px-80 font-inter'>
      <h1 className='text-4xl font-semibold font-inter mb-10 text-black dark:text-white'>
        Stoyan Grozdanov
      </h1>
      <article className='space-y-6 '>
        <p className='mb-6'>
          Hey! I&apos;m Stoyan, a software engineer and blockchain / AI investor.
        </p>
        <p className='flex items-center gap-2 mb-1'>
          Working at{' '}
          <span className='text-gray-500 flex items-center gap-1 bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200 px-1.5 py-0.5 rounded-sm cursor-pointer hover:bg-gray-300 transition-colors duration-300 hover:text-gray-900'>
            <Image
              src='/ICLogo.svg'
              alt='iC Consult logo'
              width={18}
              height={18}
              className='rounded-sm'
            />
            <span>IC Consult</span>
          </span>
        </p>
        <p className='flex items-center gap-2'>
          Creator of{' '}
          <span className='text-gray-500 flex items-center gap-1 bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200 px-1.5 py-0.5 rounded-sm cursor-pointer hover:bg-gray-300 transition-colors duration-300 hover:text-gray-900'>
            <span
              style={{
                backgroundImage: 'url("https://github.com/nuxtlabs.png")',
                content: '""',
                display: 'inline-block',
                height: '1.1em',
                width: '1.1em',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '2px',
              }}
            />
            <span>Digital Finance</span>
          </span>
        </p>
        <p className='mt-4'>
          I find passion and enjoyment in building things from scratch and
          turning raw ideas into real, working products. I love to brainstorm
          and break down problems to their core as simple solutions scale,
          complex ones fail.
        </p>
        <p className='mt-4'>
          I write blog posts about software engineering, Web3, and thoughts on
          AI - sharing what I learn and where I think things are headed. I&apos;m
          also building <b>Digital Finance</b> to rethink how we track and grow
          our money.
        </p>
        <p className='mt-4'>
          Outside of programming and investing, I enjoy traveling, off-roading,
          finding good food, spending time in nature and exercising. I share
          some of those moments on{' '}
          <Link
            className='underline underline-offset-4 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 dark:hover:decoration-gray-400 transition-colors duration-300 text-black dark:text-gray-200'
            href='https://www.instagram.com/st.grozdanovv/'
            target='_blank'
          >
            this page
          </Link>
          .
        </p>
      </article>
    </section>
  );
}
