'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState<boolean>();
  const pathname = usePathname();

  return (
    <nav className='flex h-28 border border-black w-full text-white bg-custom-blue justify-between md:justify-evenly items-center px-2 sm:px-8 xl:px-32 relative'>
      {/* Desktop Logo */}
      <Image
        src='/horizontal-logo.png' // TODO: Change to actual logo
        width={180}
        height={90}
        alt='Spartans Academy'
        className='hidden lg:block'
        priority
        loading='eager'
      />

      {/* Mobile/Tablet Logo */}
      <Image
        src='/logo-without-text.png'
        width={60}
        height={70}
        alt='Spartans Academy'
        className='block lg:hidden'
        priority
        loading='eager'
      />

      {/* Expanded Mobile Logo - when menu is open */}
      {isExpanded && (
        <Image
          src='/logo-without-text.png'
          width={80}
          height={90}
          alt='Spartans Academy'
          className='z-30 absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 lg:hidden'
          priority
          loading='eager'
        />
      )}

      <ul
        className={`
          flex w-full justify-evenly items-center
          lg:flex lg:w-full lg:justify-evenly lg:items-center lg:static lg:h-auto lg:bg-transparent lg:backdrop-blur-none lg:pt-0 lg:cursor-auto
          max-lg:flex-col max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:text-center max-lg:transition-all max-lg:duration-700 max-lg:bg-transparent-blue max-lg:backdrop-blur-2xl max-lg:bg-cover max-lg:z-20 max-lg:overflow-y-auto max-lg:overflow-x-hidden max-lg:pt-48 max-lg:cursor-pointer
          max-lg:before:content-[''] max-lg:before:block max-lg:before:absolute max-lg:before:left-0 max-lg:before:opacity-85 max-lg:before:w-full max-lg:before:h-full 
          max-lg:after:content-[''] max-lg:after:block max-lg:after:absolute max-lg:after:left-0 max-lg:after:bg-white max-lg:after:opacity-25 max-lg:after:top-40 max-lg:after:w-full max-lg:after:h-0.5
          max-lg:[&::-webkit-scrollbar]:w-0 max-lg:[&::-webkit-scrollbar]:hidden
          ${isExpanded ? 'max-lg:left-0' : 'max-lg:-left-full'}
        `}
        onClick={() => {
          if (window.innerWidth < 1024) {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <li
          className={`
            cursor-pointer text-base font-normal leading-relaxed relative transition-colors duration-300 
            after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full
            after:bg-white hover:text-gray-300
            max-lg:font-normal max-lg:text-black max-lg:after:bg-dark-green max-lg:hover:text-dark-green
            ${pathname === '/' ? 'text-white after:w-full max-lg:text-black' : ''}
          `}
        >
          <Link href='/'>Blog</Link>
        </li>
      </ul>

      <section className='flex items-center w-40 justify-evenly lg:hidden'>
        <div
          data-testid='burger-icon'
          className={`cursor-pointer z-20 relative ${
            isExpanded ?
              'transform skew-x-0 bg-transparent [&>span]:w-6 [&>span]:h-1.5 [&>span]:mb-0 [&>span:nth-child(2)]:opacity-0 [&>span:nth-child(1)]:transform [&>span:nth-child(1)]:translate-y-1.5 [&>span:nth-child(1)]:rotate-45 [&>span:nth-child(3)]:transform [&>span:nth-child(3)]:-translate-y-1.5 [&>span:nth-child(3)]:-rotate-45 hover:[&>span:nth-child(1)]:bg-white hover:[&>span:nth-child(3)]:bg-white'
            : 'hover:[&>span]:mb-2'
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className='block w-10 h-1.5 rounded-3xl mb-1.5 transition-all duration-500 bg-light-gray' />
          <span className='block w-8 h-1.5 rounded-3xl mb-1.5 transition-all duration-500 bg-light-gray' />
          <span className='block w-6 h-1.5 rounded-3xl mb-1.5 transition-all duration-500 bg-light-gray' />
        </div>
      </section>
    </nav>
  );
}
