/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '5rem',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

