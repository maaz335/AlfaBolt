import React, { useState } from 'react';
import Routing from './components/Routing';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navigationTheme = theme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={navigationTheme}>
      <Routing theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
