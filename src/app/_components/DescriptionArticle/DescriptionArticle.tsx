import AnimateOnScroll from '@/app/_components/AnimateOnScroll/AnimateOnScroll';

type DescriptionArticleProps = { description?: string; title?: string };

export default function DescriptionArticle({
  description,
  title,
}: DescriptionArticleProps) {
  return (
    <article>
      <AnimateOnScroll
        animationName='animate-fade-in-up'
        className='flex justify-around items-center py-25 max-lg:flex-col max-lg:py-5'
      >
        <h2 className='m-0 text-2xl'>{title}</h2>
        <h4 className='mt-1 mb-5 max-w-[40%] font-bold text-[0.95rem] max-lg:max-w-[80vw]'>
          {description}
        </h4>
      </AnimateOnScroll>
    </article>
  );
}
