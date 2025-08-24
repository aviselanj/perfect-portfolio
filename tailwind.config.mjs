import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import tailwindAnimate from "tailwindcss-animate";
 
const config = {
  safelist: [
    'bg-creativeSpace',
    'text-creativeWhite',
    'text-creativeBlue',
    'text-creativePurple',
    'text-creativePink',
    'text-creativeMint',
    'bg-creativePurple/80',
    'bg-creativeBlue/20',
    'bg-creativeMint/10',
    'border-creativeBlue',
    'font-vintage',
    'font-creative',
    'text-yellow-300',
    'hover:text-yellow-400',
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creativeBlue: '#6EC1E4',   // soft blue
        creativePurple: '#A084E8', // lavender
        creativePink: '#F7ACCF',   // blush
        creativeMint: '#A8FFEB',   // mint
        creativeSpace: '#232946',  // deep space blue
        creativeWhite: '#F4F4F8',  // off-white
      },
      fontFamily: {
        creative: ["'Space Grotesk'", 'ui-sans-serif', 'system-ui'],
        vintage: ["'DM Serif Display'", 'serif'],
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    tailwindAnimate,
  ],
};

export default config;