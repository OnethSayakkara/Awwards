/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madefor: ['MadeforText', 'sans-serif'],
      },
      colors: {
        lightgray: '#efefef',
        brightred: '#ff2000',
        darkgray: '#212121',
        mediumgray: '#747474',
        darkneutral: '#3d3d3d',
        bordergray: "#d7d7d7",
      },
    },
  },
  plugins: [
     function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

