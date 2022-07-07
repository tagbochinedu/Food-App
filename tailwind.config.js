/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#561F0F',
        'badge': '#33150C',
        'body': '#1C1D1F',
        'card': '#313131'
      },backgroundImage: {
        'bgImage' : "url('/src/Resources/bg.jpg')"},
    }
  },
  plugins: [],
}