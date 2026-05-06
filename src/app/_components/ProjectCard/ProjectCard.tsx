import Link from 'next/link';
import Image from 'next/image';

interface CardData {
  product: string;
  logo: string;
  summary: string;
}

type ProjectCardProps = {
  work: CardData;
  collection: 'work' | 'projects';
};

export default function ProjectCard({ work, collection }: ProjectCardProps) {
  return (
    <Link
      key={work.product}
      href={`/${collection}/${work.product}`}
      className='group mt-6 flex items-center justify-between p-4 rounded-lg transition-all duration-600 '
    >
      <article className='flex items-center gap-4'>
        <div className='w-24 h-16 shrink-0 flex items-center justify-center'>
          <Image
            src={work.logo}
            alt='logo'
            width={120}
            height={120}
            className='filter grayscale group-hover:grayscale-0 transition-all duration-600 object-contain w-full h-full'
          />
        </div>
        <div className='flex flex-col'>
          <div className='text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-white transition-all duration-600'>
            {work.product}
          </div>
          <div className='text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-all duration-600'>
            {work.summary}
          </div>
        </div>
      </article>
    </Link>
  );
}
