/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // use https://uicolors.app/create and always
      colors: {
        'main': {
          '50': '#f2f8f1',
          '100': '#e3edde',
          '200': '#c5dcbe',
          '300': '#86b57c',
          '400': '#6ea265',
          '500': '#4b8544',
          '600': '#366a31',
          '700': '#2a5527',
          '800': '#234421',
          '900': '#1d381c',
          '950': '#0f1f0f',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class', // only generate classes
  }),
  require('@tailwindcss/typography')],
};
