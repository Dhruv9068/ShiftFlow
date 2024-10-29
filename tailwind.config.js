/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        // You can add custom background colors if needed
       
      },
      backgroundImage: {
        
      },
      colors: {
        neonBlue: '#00f6ff',
        neonGreen: '#39ff14',
        neonPurple: '#bf00ff',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode support
  plugins: [
    forms,
    typography,
  ],
};
