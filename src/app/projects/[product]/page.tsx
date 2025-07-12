import ArticleImage from '@/app/_components/ArticleImage/ArticleImage';
import ThreeSectionDescriptionArticle from '@/app/_components/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle';
import NextPositionArticle from '@/app/_components/NextPositionArticle/NextPositionArticle';
import PositionDescriptionArticle from '@/app/_components/PositionDescriptionArticle/PositionDescriptionArticle';
import {
  getAllProjects,
  getProjectDetails,
} from '@/app/projects/server-functions/getProjectData';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(({ product }) => ({ product }));
}

export default async function Work({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const projectName = decodeURI(product);

  const allPromises = Promise.all([
    getProjectDetails(projectName),
    getAllProjects(),
  ]);

  const [workData, allWorkData] = await allPromises;
  const work = workData.find(({ product }) => product === projectName);

  return (
    <section className='-mt-23'>
      <ArticleImage imageURL={work?.images?.[0] || ''} includeArrow />
      <ThreeSectionDescriptionArticle
        product={work?.product || ''}
        started_at={work?.started_at || new Date()}
        ended_at={work?.ended_at || null}
        concept={work?.concept || ''}
        techStack={work?.techStack || []}
      />
      <ArticleImage imageURL={work?.images[1] || ''} />
      <PositionDescriptionArticle contribution={[]} />
      <NextPositionArticle
        positions={allWorkData}
        currentJob={work?.product || ''}
      />
    </section>
  );
}
