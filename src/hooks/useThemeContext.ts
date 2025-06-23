import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

/**
 * hook that gives access to the theme context
 */
export const useThemeContext = () => useContext(ThemeContext);
