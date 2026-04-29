'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTransition } from 'react';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className='mb-10 relative'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
      </div>
      <input
        type='text'
        placeholder='Search posts...'
        defaultValue={searchParams.get('q') || ''}
        onChange={e => handleSearch(e.target.value)}
        className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500'
      />
    </div>
  );
}
