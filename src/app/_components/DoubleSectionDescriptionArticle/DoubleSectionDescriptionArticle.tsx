import Animate from '@/app/_components/AnimateOnScroll/AnimateOnScroll';
import { format } from 'date-fns';

interface DoubleSectionDescriptionArticleProps {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  techStack: string[];
}

export default function DoubleSectionDescriptionArticle({
  product,
  started_at,
  ended_at,
  techStack,
}: DoubleSectionDescriptionArticleProps) {
  return (
    <Animate
      animationName='animate-fade-in-up'
      className='flex gap-12 px-24 py-20 lg:px-48 lg:py-25 xl:px-64 xl:gap-16 max-lg:flex-col max-lg:items-center max-lg:px-8 max-lg:py-15 max-lg:gap-6'
    >
      <section className='flex-1 max-lg:w-full max-lg:text-center'>
        <h3 className='text-gray-500 m-0 text-sm dark:text-gray-400'>
          Product
        </h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>{product}</h4>
        <h3 className='text-gray-500 m-0 text-sm dark:text-gray-400'>Period</h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>
          {started_at && format(started_at, 'MMMM do yyyy')} -{' '}
          {ended_at ? format(ended_at, 'MMMM do yyyy') : 'present'}
        </h4>
      </section>
      <section className='flex-1 max-lg:w-full max-lg:text-center'>
        <h3 className='text-gray-500 m-0 text-sm dark:text-gray-400'>
          Tech Stack
        </h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>
          <div className='flex flex-wrap gap-2'>
            {techStack.map(tech => (
              <span
                key={tech}
                className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
        </h4>
      </section>
    </Animate>
  );
}
