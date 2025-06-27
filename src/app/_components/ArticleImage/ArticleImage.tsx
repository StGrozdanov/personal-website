'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';

interface ArticleImageProps {
  imageURL: string;
  includeArrow?: boolean;
}

export default function ArticleImage({
  imageURL,
  includeArrow = false,
}: ArticleImageProps) {
  const iconClickHandler = useCallback(() => {
    window.scroll({
      behavior: 'smooth',
      top: 500,
    });
  }, []);

  return (
    <article className='relative'>
      <div
        className='w-full h-screen bg-scroll lg:bg-fixed bg-center bg-no-repeat bg-cover brightness-75'
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      {includeArrow && (
        <FontAwesomeIcon
          className='absolute top-1/2 right-5 text-6xl cursor-pointer'
          icon={faArrowDownLong}
          color='white'
          beat
          onClick={iconClickHandler}
        />
      )}
    </article>
  );
}
