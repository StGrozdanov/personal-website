import AnimateOnScroll from '@/app/_components/AnimateOnScroll/AnimateOnScroll';

type PositionDescriptionArticleProps = { contribution?: string[] };

export default function PositionDescriptionArticle({
  contribution,
}: PositionDescriptionArticleProps) {
  return (
    <article className='bg-black'>
      <AnimateOnScroll
        animationName='fadeInUp'
        className='flex justify-around items-center py-25 bg-black text-white max-lg:flex-col max-lg:py-5'
      >
        <h2 className='m-0 text-2xl'>Contribution</h2>
        <h4 className='mt-1 mb-5 max-w-[40%] font-bold text-[0.95rem] max-lg:max-w-[80vw]'>
          {contribution?.join('. ')}
        </h4>
      </AnimateOnScroll>
    </article>
  );
}
