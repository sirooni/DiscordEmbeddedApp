/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/*.{ts,tsx}', './dist/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#D4D8F0',
        foreground: '#FFFFFE',
        main: '#232946',
        accent: '#EEBBC3',
      },
    },
  },
  plugins: [],
}
