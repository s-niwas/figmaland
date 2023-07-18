/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '90': '90px',
      },
        fontFamily: {
          graphik: ['Graphik', 'sans-serif'],
        },
    },
  },
  plugins: [],
}