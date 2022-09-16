/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#584CA1",
        secondary: "#BBB1FB",
        dark: "#363442",
        darker: "#27262E",
      }
    },
  },
  plugins: [],
}