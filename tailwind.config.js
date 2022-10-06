/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      dropShadow: {
        'xl': '0 10px 10px rgba(157, 23, 77, 0.1)',
      }
    },
  },
  plugins: [],
}