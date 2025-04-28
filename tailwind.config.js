/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   colorFade: {
      //     '0%': { filter: 'grayscale(100%)' },
      //     '100%': { filter: 'grayscale(0%)' },
      //   },
      //   fadeZoom: {
      //     '0%': { opacity: '0', transform: 'scale(0.95)' },
      //     '100%': { opacity: '1', transform: 'scale(1)' },
      //   },
      // },
      // animation: {
      //   colorFade: 'colorFade 5s ease-out forwards', // durata 2 secondi
      //   fadeZoom: 'fadeZoom 1s ease-out forwards',
      // },
    },
  },
  plugins: [],
}

