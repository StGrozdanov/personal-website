import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type ResumeLink = { link: string };

export default function Resume({ link }: ResumeLink) {
  return (
    <Link
      target='_blank'
      rel='noreferrer'
      href={link}
      className='animate-fade-in-down-delay-1 flex items-center justify-center gap-2 px-8 py-3 bg-white text-black border border-gray-200 dark:bg-black dark:text-white dark:border-gray-800 font-semibold rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm'
    >
      <span>Resume</span>
      <FontAwesomeIcon
        icon={faFileArrowDown}
        beat
        fontSize={16}
        className='opacity-70'
      />
    </Link>
  );
}

