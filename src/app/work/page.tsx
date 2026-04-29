import { getAllWorkExperiences } from '@/app/work/server-functions/getWorkData';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

export default async function Work() {
  const workData = await getAllWorkExperiences();

  return (
    <section className='px-4 pb-20 lg:px-64 font-inter text-black dark:text-white'>
      <h1 className='text-3xl md:text-4xl font-bold mb-16 text-center md:text-left'>
        Professional Work Experience
      </h1>

      <div className='relative md:ml-16 border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-12 md:pl-16 slide-enter'>
        {workData.map((work, index) => (
          <Link
            href={`/work/${work.product}`}
            key={work.product}
            className='relative mb-16 last:mb-0 slide-enter block group no-underline'
            style={{ '--enter-stage': index + 1 } as React.CSSProperties}
          >
            <div className='absolute -left-[4.5rem] md:-left-[6.6rem] top-0 bg-white dark:bg-black rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center p-2 w-[3rem] h-[3rem] md:w-20 md:h-20 z-10 transition-transform duration-300 group-hover:scale-105'>
              <div className='relative w-10 h-10 md:w-16 md:h-16'>
                <Image
                  src={work.logo}
                  alt={`${work.product} logo`}
                  fill
                  className='object-contain'
                />
              </div>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors'>
                {work.product}
              </h3>
              <div className='text-lg font-medium text-gray-800 dark:text-gray-200 mt-1'>
                {work.summary}
              </div>
              <span className='text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4 block'>
                {formatDate(work.started_at)} –{' '}
                {work.ended_at ? formatDate(work.ended_at) : 'Present'}
              </span>

              <ul className='list-disc ml-4 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 marker:text-gray-400'>
                {work.contribution.map((point, i) => (
                  <li key={i} className='pl-1'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
