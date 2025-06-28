import { getAllWorkExperiences } from '@/app/work/server-functions/getWorkData';
import Link from 'next/link';

export default async function Work() {
  const workData = await getAllWorkExperiences();
  return (
    <div className='flex flex-col gap-4 text-center justify-center items-center h-screen'>
      {workData.map(work => (
        <Link key={work.product} href={`/work/${work.product}`}>
          {work.product}
        </Link>
      ))}
    </div>
  );
}
