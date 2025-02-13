'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4m0 0v4m0-4h6l-1 4H5m10 0v4m0 0v4m0-4h6l-1-4H15m-7 4h14l2-4H10z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">AccountTechs</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link href="/services" className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            Services
          </Link>
          <Link href="/products" className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            Products
          </Link>
          <Link href="/contact" className="text-white dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="ml-4">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}