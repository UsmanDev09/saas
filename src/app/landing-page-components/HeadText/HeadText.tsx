"use client";

import React from 'react';
import YouTube from 'react-youtube';
import styles from './Header.module.css';
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
  const videoId = 'fdzxgcjkhl';

  const opts = {
    height: '519.2',
    width: '885.6',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header className="text-center bg-white dark:bg-gray-800 flex flex-col items-center">
        <div className="mx-[137.6] mb-[72px]">
            <h1 className="text-6xl font-bold text-gray-800 dark:text-white w-[768px] h-[120px] font-Virgil">The free SaaS template with superpowers</h1>
            <p className="text-lg text-black dark:text-gray-400 w-[672px] h[64px] mx-[48px] mt-[24px]">An open-source, feature-rich, full-stack React + NodeJS template that manages features for you.</p>
            
            <div className="flex justify-center space-x-4 mt-[40px]">
                <button className="rounded-md px-6 py-4 text-sm font-semibold text-gray-700  ring-1 ring-inset ring-gray-200 hover:ring-2 hover:ring-yellow-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white">Get Started</button>
                <button className="group relative flex items-center justify-center rounded-md bg-gray-100 px-6 py-4 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 dark:bg-gray-700 hover:ring-2 hover:ring-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View the Repo
                  <span className="absolute -top-2 -right-9 flex items-center justify-center h-8 w-16 rounded-full bg-yellow-300 text-gray-800 text-xs font-medium shadow-md">
                    <FaGithub className="mr-1" />
                    6610
                  </span>
                </button>
    </div>
        </div>
    </header>
  );
};

export default Header;
