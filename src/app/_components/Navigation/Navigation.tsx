'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faEnvelope,
  faBlog,
  faCode,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useThemeContext } from '@/hooks/useThemeContext';
import { ThemeMode } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

const themeIcons = {
  light: {
    icon: faMoon,
    nextTheme: 'dark' as ThemeMode,
  },
  dark: {
    icon: faSun,
    nextTheme: 'light' as ThemeMode,
  },
};

export default function Navigation() {
  const { theme, setTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='flex shadow-md shadow-gray-100 dark:shadow-gray-800 fixed top-0 left-0 right-0 z-2 bg-[#f9f9f9]/80 backdrop-blur-sm justify-between items-center p-4 lg:px-8 text-gray-500 font-medium font-inter dark:bg-black dark:text-gray-300'>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          width={60}
          height={60}
          className='w-14 md:w-15 filter grayscale brightness-65 cursor-pointer hover:scale-120 hover:brightness-50 transition-transform hover:rotate-y-50 hover:rotate-x-20 duration-600 dark:brightness-110 dark:hover:brightness-150'
        />
      </Link>

      <ul className='gap-2 flex items-center md:gap-4 md:hidden'>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/blog'>
            <FontAwesomeIcon icon={faBlog} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/projects'>
            <FontAwesomeIcon icon={faCode} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/work'>
            <FontAwesomeIcon icon={faBriefcase} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/stoyan-grozdanov/'
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link target='_blank' href='https://github.com/StGrozdanov'>
            <FontAwesomeIcon icon={faGithub} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link target='_blank' href='mailto:st.grozdanov.developer@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size='xl' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          {mounted ?
            <FontAwesomeIcon
              icon={themeIcons[theme as keyof typeof themeIcons].icon}
              fixedWidth
              size='xl'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          : <FontAwesomeIcon
              icon={faSun}
              fixedWidth
              size='xl'
              className='opacity-0'
            />
          }
        </li>
      </ul>

      <ul className='hidden md:flex items-center gap-4'>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link href='/work'>Work</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/stoyan-grozdanov/'
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth size='lg' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link target='_blank' href='https://github.com/StGrozdanov'>
            <FontAwesomeIcon icon={faGithub} fixedWidth size='lg' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link target='_blank' href='https://x.com/StoyanGrr'>
            <FontAwesomeIcon icon={faXTwitter} fixedWidth size='lg' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          <Link target='_blank' href='mailto:st.grozdanov.developer@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size='lg' />
          </Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-white'>
          {mounted ?
            <FontAwesomeIcon
              icon={themeIcons[theme as keyof typeof themeIcons].icon}
              fixedWidth
              size='lg'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          : <FontAwesomeIcon icon={faSun} fixedWidth className='opacity-0' />}
        </li>
      </ul>
    </nav>
  );
}
