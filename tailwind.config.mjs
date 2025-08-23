import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import tailwindAnimate from "tailwindcss-animate";
 
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
        creativeBlue: '#6EC1E4',   // soft blue
        creativePurple: '#A084E8', // lavender
        creativePink: '#F7ACCF',   // blush
        creativeMint: '#A8FFEB',   // mint
        creativeSpace: '#232946',  // deep space blue
        creativeWhite: '#F4F4F8',  // off-white
      },
      fontFamily: {
        creative: ["'Space Grotesk'", 'ui-sans-serif', 'system-ui'],
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