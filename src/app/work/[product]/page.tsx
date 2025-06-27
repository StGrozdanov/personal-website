import ArticleImage from '@/app/_components/ArticleImage/ArticleImage';
import ThreeSectionDescriptionArticle from '@/app/_components/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle';
import NextPositionArticle from '@/app/_components/NextPositionArticle/NextPositionArticle';
import PositionDescriptionArticle from '@/app/_components/PositionDescriptionArticle/PositionDescriptionArticle';
import { getWorkData } from '@/app/work/server-functions/getWorkData';

export async function generateStaticParams() {
  const workData = await getWorkData();
  return workData.map(({ product }) => ({ product }));
}

export default async function Work({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  console.log('params', params);

  const { product } = await params;
  const companyName = decodeURI(product);
  const workData = await getWorkData();
  const work = workData.find(({ product }) => product === companyName);

  console.log(work);

  return (
    <section>
      <ArticleImage imageURL={work?.images?.[0] || ''} includeArrow />
      <ThreeSectionDescriptionArticle
        product={work?.product || ''}
        started_at={work?.started_at || new Date()}
        ended_at={work?.ended_at || null}
        concept={work?.concept || ''}
        techStack={work?.techStack || []}
      />
      <ArticleImage imageURL={work?.images[1] || ''} />
      <PositionDescriptionArticle contribution={work?.contribution || []} />
      <NextPositionArticle
        positions={workData}
        currentJob={work?.product || ''}
      />
    </section>
  );
}
