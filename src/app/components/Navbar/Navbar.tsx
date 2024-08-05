'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for dark mode preference on mount
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark');
    }
  }, []);

  const handleModeToggle = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode.toString());
      if (newMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 text-black py-[24px] flex items-center justify-between">
      {/* Left-aligned section */}
      <div className="flex items-center space-x-2 gap-1">
        <img src="/assets/logo.png" alt="Logo" className="h-8" />
        <span className="text-lg font-bold">Open Saas</span>
      </div>

      {/* Middle section */}
      <div className="space-x-12">
        <Link href="#section1">Features</Link>
        <Link href="#section2">Documentation</Link>
        <Link href="#section3">Blog</Link>
      </div>

      {/* Right-aligned section */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <div className={`relative w-14 h-7 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <input
            type="checkbox"
            id="dark-mode-toggle"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            checked={isDarkMode}
            onChange={handleModeToggle}
          />
          <label htmlFor="dark-mode-toggle" className="flex items-center h-full cursor-pointer">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out flex items-center justify-center rounded-full h-6 w-6 ${
                isDarkMode ? 'bg-white translate-x-6' : 'bg-white translate-x-1'
              }`}
            >
              {isDarkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-gray-400" />}
            </div>
          </label>
        </div>
        <Link href="/demo">Try the demo app</Link>
      </div>
    </nav>
  );
};

export default Navbar;