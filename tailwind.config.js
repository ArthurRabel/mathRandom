/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color' : '#111111',
        'main-color' : '#181818',
        'secundary-color' : '#ffcc00'
      }
    },
  },
  plugins: [],
}