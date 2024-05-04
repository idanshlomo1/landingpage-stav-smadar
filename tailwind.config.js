/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'white',
        secondary: '#fdc917',
        dark: '#181818'
      }
    },
  },
  plugins: [],
}
