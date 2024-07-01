import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
    
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log('updated theme',theme === 'light' ?  'dark': 'light')
    setTheme(theme === 'light' ?  'dark': 'light');
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}