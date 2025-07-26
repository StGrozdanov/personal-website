import ArticleImage from '@/app/_components/ArticleImage/ArticleImage';
import DoubleSectionDescriptionArticle from '@/app/_components/DoubleSectionDescriptionArticle/DoubleSectionDescriptionArticle';
import NextPositionArticle from '@/app/_components/NextPositionArticle/NextPositionArticle';
import DescriptionArticle from '@/app/_components/DescriptionArticle/DescriptionArticle';
import {
  getAllWorkExperiences,
  getWorkDetails,
} from '@/app/work/server-functions/getWorkData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const workData = await getAllWorkExperiences();
  return workData.map(({ product }) => ({ product }));
}

export default async function Work({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const decodedProduct = decodeURIComponent(product);

  const workDetails = getWorkDetails(decodedProduct);
  const allWorkData = getAllWorkExperiences();

  const [work, fullWork] = await Promise.all([workDetails, allWorkData]);

  if (!work) {
    return notFound();
  }

  return (
    <section className='-mt-23'>
      <ArticleImage imageURL={work.images[0]} includeArrow />
      <DoubleSectionDescriptionArticle
        product={work.product}
        started_at={work.started_at}
        ended_at={work.ended_at}
        techStack={work.tech_stack}
      />
      <ArticleImage imageURL={work.images[1] || ''} />
      <DescriptionArticle description={work.concept} title='Concept' />
      <ArticleImage imageURL={work.images[0]} />
      <DescriptionArticle
        description={work.contribution?.join('. ')}
        title='Contribution'
      />
      <NextPositionArticle positions={fullWork} currentJob={work.product} />
    </section>
  );
}
