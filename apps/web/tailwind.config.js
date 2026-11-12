/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1E28', // Royal Maroon / Crimson
          dark: '#6E161F',
          light: '#FBF2F3',
          border: '#F0CED1',
          50: '#FDF7F8',
          100: '#FBF2F3',
          600: '#8B1E28',
          700: '#6E161F',
          800: '#541017',
        },
        navy: {
          DEFAULT: '#1B365D', // Academic Heritage Navy
          dark: '#132644',
          light: '#EEF3F8',
          border: '#C6D6E7',
          50: '#F4F7FB',
          100: '#EEF3F8',
          700: '#1B365D',
          800: '#132644',
          900: '#0C182B',
        },
        gold: {
          DEFAULT: '#C89D3C', // University Gold
          dark: '#A98028',
          light: '#FBF6E9',
          border: '#E8D5A7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

