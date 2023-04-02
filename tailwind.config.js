/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.700', 'currentColor'),
      }),
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.gray.600'),
        ...theme('colors'),
      }),
      ringOffsetColor: ({ theme }) => ({
        DEFAULT: theme('colors.gray.900'),
        ...theme('colors'),
      }),
      ringOffsetWidth: {
        DEFAULT: '1.5px'
      },
      ringOpacity: ({ theme }) => ({
        DEFAULT: '0.5',
        ...theme('opacity'),
      }),
      ringWidth: {
        DEFAULT: '1.3px'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'class', // only generate classes
  }),],
};
