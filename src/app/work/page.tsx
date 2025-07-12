import { getAllWorkExperiences } from '@/app/work/server-functions/getWorkData';
import ProjectCard from '../_components/ProjectCard/ProjectCard';

export default async function Work() {
  const workData = await getAllWorkExperiences();
  return (
    <section className='px-4'>
      <h1 className='text-4xl font-semibold mb-10 text-black dark:text-white font-inter text-center'>
        Work Experience
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slide-enter'>
        {workData.map(work => (
          <ProjectCard key={work.product} work={work} />
        ))}
      </section>
    </section>
  );
}
