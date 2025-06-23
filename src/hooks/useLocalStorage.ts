import { useEffect, useState } from 'react';

type LocalStorageProps = {
  key: string;
  defaultValue: string;
};

/**
 * Hook that gives tooling to interact with the local storage
 */
export function useLocalStorage({ key, defaultValue }: LocalStorageProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const item = localStorage?.getItem(key);
    if (item && item !== value) {
      setValue(item);
    }
  }, []);

  const updateLocalStorage = (newValue: string) => {
    if (newValue && typeof window !== 'undefined') {
      localStorage.setItem(key, newValue);
      setValue(newValue);
    }
  };

  return {
    value,
    updateLocalStorage,
  };
}
