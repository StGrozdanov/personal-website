import Animate from '@/app/_components/AnimateOnScroll/AnimateOnScroll';
import { format } from 'date-fns';

interface ThreeSectionDescriptionArticleProps {
  product: string;
  started_at: Date;
  ended_at: Date | null;
  concept: string;
  techStack: string[];
}

export default function ThreeSectionDescriptionArticle({
  product,
  started_at,
  ended_at,
  concept,
  techStack,
}: ThreeSectionDescriptionArticleProps) {
  return (
    <Animate
      animationName='fadeInUp'
      className='flex justify-evenly px-24 py-20 lg:px-38 lg:py-25 max-lg:flex-col max-lg:items-center max-lg:px-8 max-lg:py-15'
    >
      <section className='w-[30%] max-lg:w-full max-lg:text-center'>
        <h3 className='text-gray-500 m-0 text-sm'>Product</h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>{product}</h4>
        <h3 className='text-gray-500 m-0 text-sm'>Period</h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>
          {started_at && format(started_at, 'MMMM do yyyy')} -{' '}
          {ended_at ? format(ended_at, 'MMMM do yyyy') : 'now'}
        </h4>
      </section>
      <section className='w-[30%] max-lg:w-full max-lg:text-center'>
        <h3 className='text-gray-500 m-0 text-sm'>Concept</h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>{concept}</h4>
      </section>
      <section className='w-[60%] pl-12 max-lg:w-4/5 max-lg:text-center max-lg:p-0'>
        <h3 className='text-gray-500 m-0 text-sm'>Tech Stack</h3>
        <h4 className='mt-1 mb-5 font-bold text-[0.95rem]'>
          {techStack && techStack.join(', ')}
        </h4>
      </section>
    </Animate>
  );
}
