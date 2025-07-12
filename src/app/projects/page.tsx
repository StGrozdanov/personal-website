import { getAllProjects } from '@/app/projects/server-functions/getProjectData';
import ProjectCard from '../_components/ProjectCard/ProjectCard';

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <section className='px-4'>
      <h1 className='text-4xl font-semibold mb-10 text-black dark:text-white font-inter text-center'>
        Projects
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slide-enter'>
        {projects.map(project => (
          <ProjectCard key={project.product} work={project} collection='projects' />
        ))}
      </section>
    </section>
  );
}
