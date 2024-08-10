import React from 'react';
import { useTheme } from '../context/ThemeContext';


function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <footer className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}>
      <p>&copy; 2024 Portofolio</p>
    </footer>
  );
}

export default Footer;