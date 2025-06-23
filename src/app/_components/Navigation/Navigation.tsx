'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from '@/hooks/useThemeContext';
import { ThemeMode } from '@/context/ThemeContext';

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

  return (
    <nav className='flex justify-between items-center py-4 px-4 lg:px-28 text-gray-500 font-medium font-inter dark:bg-black dark:text-gray-400'>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          width={70}
          height={70}
          className='filter grayscale brightness-70 cursor-pointer hover:scale-120 hover:brightness-50 transition-transform hover:rotate-y-50 hover:rotate-x-20 duration-600 dark:brightness-110 dark:hover:brightness-150'
        />
      </Link>
      <ul className='flex items-center gap-4'>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-gray-100'>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-gray-100'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-gray-100'>
          <Link href='/work'>Work</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-700 transition-colors duration-300 dark:hover:text-gray-100'>
          <FontAwesomeIcon
            icon={themeIcons[theme as keyof typeof themeIcons].icon}
            fixedWidth
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </li>
      </ul>
    </nav>
  );
}
