import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mardiPurple: '#4B2067', // deep purple
        mardiGold: '#FFD700',   // gold
        mardiBlue: '#191970',   // midnight blue
      },
      fontFamily: {
        jazz: ["'Quicksand'", 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
};

export default config;
