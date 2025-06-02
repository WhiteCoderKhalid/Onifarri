/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E1C1A',
        secondary: '#6C3E2A',
        accent: '#3B7798',
        neutral: '#A48B7C',
        background: '#F2F0E6',
      }
    },
  },
  plugins: [],
};