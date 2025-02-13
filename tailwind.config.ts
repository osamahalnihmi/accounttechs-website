import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0073e6', // Example primary color
        secondary: '#f5f5f5', // Example secondary color
      },
    },
  },
  darkMode: 'class', // Use a class ('dark') to toggle dark mode
  plugins: [],
} satisfies Config;