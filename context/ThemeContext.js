'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage only on the client-side
    const storedIsDarkMode = localStorage.getItem('isDarkMode');
    if (storedIsDarkMode !== null) {
      setIsDark(storedIsDarkMode === 'true');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prevIsDark => {
      const newIsDark = !prevIsDark;
      localStorage.setItem('isDarkMode', String(newIsDark));
      return newIsDark;
    });
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
