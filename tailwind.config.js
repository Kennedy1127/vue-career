/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'home-xl': '1200px',
        'home-lg': '1000px',
        'home-md': '800px',
        'home-sm': '600px',
      },
      gridTemplateColumns: {
        24: 'repeat(24,minmax(0,1fr))',
        22: 'repeat(22,minmax(0,1fr))',
        20: 'repeat(20,minmax(0,1fr))',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-grey-1': '#dadce0',
        'brand-grey-2': '#f8f9fa',
        'brand-grey-3': '#80868b',
        'brand-blue-1': '#1967d2',
        'brand-blue-2': '#4285f4',
        'text-black': '#202124',
        'text-grey': '#5f6386',
        'input-text-grey': '#3c4043',
        'benefits-title-background': '#f0f6ff',
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
        gray: '0 1px 3px 0 rgba(60, 64, 67, .3)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
};
