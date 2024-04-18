/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blk: 'rgb(var(--color-blk) / <alpha-value>)',
      wht: 'rgb(var(--color-wht) / <alpha-value>)',
      primary: 'rgb(var(--text-wht) / <alpha-value>)',
      secondary: 'rgb(var(--text-blk) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        Cardinal: ['"Cardinal Fruit"', "serif"],
      },
      backgroundImage: {
        'dragonwht': "url('../images/bg.png')",
        'dragonblk': "url('../images/bg-blk.png')",
      },
    },
    screens: {
      'phone': '480px',
      'tablet': '640px',
      '768': '768px',
      'laptop': '960px',
      'desktop': '1280px',
      '1920': '1920px',
      '4k': '2560px'
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    }
  ],
}