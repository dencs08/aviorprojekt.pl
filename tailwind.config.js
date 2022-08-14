/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xs': '400px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
