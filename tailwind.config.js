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
        'xl': '0 10px 10px rgba(164, 28, 92, 0.1)',
      },
      colors: {
        'pink': '#a41c5c',
      },
    },
  },
  plugins: [],
}