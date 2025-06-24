import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type ResumeLink = { link: string };

export default function Resume({ link }: ResumeLink) {
  return (
    <Link target='_blank' rel='noreferrer' href={link}>
      <div className='dark:shadow-gray-600 animate-fade-in-down-delay-1 p-2 text-center text-sm absolute -translate-x-1/2 [@media(min-width:1020px)]:right-[300px] -translate-y-1/2 left-1/2 [@media(min-width:1400px)]:right-[750px] lg:left-auto -top-3 lg:top-48 z-[1] shadow-md flex flex-col font-semibold hover:cursor-pointer'>
        <FontAwesomeIcon
          icon={faFileArrowDown}
          beat
          fontSize={18}
          className='mb-3'
        />
        Resume
      </div>
    </Link>
  );
}
