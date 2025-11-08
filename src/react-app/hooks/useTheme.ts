import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const newTheme = (mutation.target as HTMLElement).classList.contains('dark') ? 'dark' : 'light';
          setTheme(newTheme);
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initial theme
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    return () => observer.disconnect();
  }, []);

  return theme;
}
