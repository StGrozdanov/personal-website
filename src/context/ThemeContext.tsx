'use client';

import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: (_: ThemeMode) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem('theme');
    if (stored) return stored as ThemeMode;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark'
      : 'light';
  };

  const { value, updateLocalStorage } = useLocalStorage({
    key: 'theme',
    defaultValue: getInitialTheme(),
  });

  const setTheme = (newTheme: ThemeMode) => updateLocalStorage(newTheme);

  const applyTheme = () => {
    if (typeof window === 'undefined') return;

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    applyTheme();
  }, [value]);

  return (
    <ThemeContext.Provider
      value={{
        theme: value as ThemeMode,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
