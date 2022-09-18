/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090909",
        secondary: "#2A2A2A",
        dark: "#050505",
        darker: "#000000",
      }
    },
  },
  plugins: [],
}