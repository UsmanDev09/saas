"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import { useAuth, useUser, SignOutButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { isLoaded, user } = useUser(); // Fetch user info
  const { signOut } = useAuth(); // Sign out method

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

  const handleDropdownToggle = () => {
    setShowDropdown(prev => !prev);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="py-6 flex items-center justify-between">
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
        <div className={`relative w-14 h-7 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-gray'}`}>
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
                isDarkMode ? 'bg-gray translate-x-6' : 'bg-white translate-x-1'
              }`}
            >
              {isDarkMode ? <FaMoon style={{ color: '#8E8E8E' }} /> : <FaSun style={{ color: '#8E8E8E' }} />}
            </div>
          </label>
        </div>

        {/* User Info and Dropdown */}
        {isLoaded && user ? (
          <div className="relative">
            <button onClick={handleDropdownToggle} className="flex items-center space-x-2">
              <span>{user.emailAddresses[0]?.emailAddress || 'User'}</span>
              <FaChevronDown />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
                <Link href="/pages/demo" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Admin Dashboard
                </Link>
                <button onClick={handleLogout} className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/pages/demo">Try the demo app</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;