/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: "#add8e6",
        lightColor: "#e9ecef",
        containerColor: "#f0f0f0",
        blueColor: "#00B7FFA1"
      },
      backgroundImage: {
        'mainPhoto': "url('/public/main_photo.png')",
      }
    },
  },
  plugins: [],
}