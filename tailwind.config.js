/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // use https://uicolors.app/create and always
      colors: {
        'main': {
          '50': '#fff0fb',
          '100': '#ffe4f9',
          '200': '#ffc8f4',
          '300': '#ff9bea',
          '400': '#ff5dd9',
          '500': '#ff2dc4',
          '600': '#f91fad',
          '700': '#d90085',
          '800': '#b3016e',
          '900': '#94075d',
          '950': '#5c0035',
        },

      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.main.700'),
        ...theme('colors'),
      }),
      ringOffsetWidth: {
        DEFAULT: '2px'
      },
      ringWidth: {
        DEFAULT: '1.5px'
      },
      transitionDuration: {
        DEFAULT: '250ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.1, 0.1, 0.3, 1.1)'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class', // only generate classes
  }),],
};
