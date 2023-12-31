/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'top': 'top',
        'height': 'height',
        'width': 'width'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

