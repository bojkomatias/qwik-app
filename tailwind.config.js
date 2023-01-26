/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.zinc.700'),
        ...theme('colors'),
      }),
      divideColor: ({ theme }) => theme('borderColor'),
      transitionDuration: {
        DEFAULT: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0, 0, 0, 1)",
        spring: "cubic-bezier(0, 0, 0, 2)",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms")({
    //   strategy: "base", // only generate classes
    // }),
  ],
};


