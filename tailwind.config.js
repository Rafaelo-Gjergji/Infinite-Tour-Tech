/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0056b3',
        'light-blue': '#3b82f6',
        'brand-grey': '#d1d5db',
      }
    },
  },
  plugins: [],
}
