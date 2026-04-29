import Link from 'next/link';
import Resume from './_components/Resume/Resume';

export default function Home() {
  return (
    <section className='px-4 py-20 flex flex-col items-center text-center font-inter max-w-4xl mx-auto'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white slide-enter'>
        Hey! I&apos;m Stoyan 👋
      </h1>

      <div className='max-w-2xl mx-auto mb-12 mt-4 slide-enter-3'>
        <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
          I find passion and enjoyment in building things from scratch and
          turning raw ideas into real, working products. I write blog posts
          about software engineering, Web3 and thoughts on AI - sharing what I
          learn and where I think things are headed. Outside of work, I enjoy
          traveling, off-roading, finding good food, spending time in nature and
          exercising.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 slide-enter-4'>
        <Link
          href='/blog'
          className='px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-md hover:opacity-90 transition-opacity'
        >
          Read Blog
        </Link>
        <Resume link='https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/CV-7.pdf' />
      </div>
    </section>
  );
}
