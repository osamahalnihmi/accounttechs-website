'use client';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Ensure the component only runs in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Placeholder while mounting
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }
      className="text-white hover:text-blue-600 focus:outline-none"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="h-6 w-6" title="Switch to Light Mode" />
      ) : (
        <FiMoon className="h-6 w-6" title="Switch to Dark Mode" />
      )}
    </button>
  );
}