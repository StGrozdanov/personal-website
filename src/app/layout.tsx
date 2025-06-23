import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navigation from './_components/Navigation/Navigation';
import { ThemeProvider } from '@/context/ThemeContext';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const sansFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Stoyan Grozdanov',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${interFont.variable} ${sansFont.variable}`}>
      <body className='bg-[url("/bg-white.avif")] dark:bg-[url("/bg-dark.png")] dark:text-gray-300 text-gray-600 bg-cover bg-center bg-fixed selection:bg-gray-200 selection:text-gray-900 dark:selection:bg-gray-800 dark:selection:text-gray-200'>
        <div className='fixed inset-0 pointer-events-none' />
        <div className='z-1'>
          <ThemeProvider>
            <Navigation />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
