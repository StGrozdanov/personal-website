'use client';

import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import type { WorkData } from '@/app/work/server-functions/getWorkData';

interface NextPositionArticle {
  positions: WorkData[];
  currentJob: string;
}

export default function NextPositionArticle({
  positions,
  currentJob,
}: NextPositionArticle) {
  const findTheNextArticle = useCallback(
    (jobs: WorkData[]) => {
      return jobs
        ?.map((job, currentJobIndex) => {
          if (job.product === currentJob && currentJobIndex + 1 < jobs.length) {
            return jobs[currentJobIndex + 1];
          } else if (
            job.product === currentJob &&
            currentJobIndex + 1 >= jobs.length
          ) {
            return jobs[0];
          }
        })
        .filter(job => job != undefined);
    },
    [currentJob],
  );

  return (
    <article className='relative'>
      <section className='absolute flex flex-col top-[12%] right-0 z-10 text-white'>
        <Link
          className='self-center font-bold text-3xl flex items-center z-20 hover:cursor-pointer max-lg:text-2xl text-inherit'
          href={`/work/${findTheNextArticle(positions)[0]?.product}`}
        >
          <span>
            Next Job
            <FontAwesomeIcon
              icon={faArrowRightLong}
              beatFade
              className='ml-5'
            />
          </span>
        </Link>
        <h2 className='font-bold text-6xl max-w-[50vw] max-lg:text-4xl max-lg:max-w-[90vw]'>
          {findTheNextArticle(positions)[0]?.product}
        </h2>
      </section>
      <div
        className='w-full h-[75vh] bg-fixed bg-center bg-no-repeat bg-cover brightness-80 max-lg:bg-scroll'
        style={{
          backgroundImage: `url(${findTheNextArticle(positions)[0]?.images[0]})`,
        }}
      />
    </article>
  );
}
