/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          main: colors.emerald[500],
          secondary: colors.emerald[400],
        },
        text: {
          main: colors.gray[500],
          secondary: colors.gray[400],
          dark: colors.black,
        },
      },
    },
  },
  plugins: [],
}
