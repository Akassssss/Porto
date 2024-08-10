import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}>
      <h1 className="text-2xl">Portofolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="mt-4 p-2 border rounded bg-gray-300 hover:bg-gray-400"
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
