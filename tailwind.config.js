/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: "#e1e5f2",
        lightColor: "#e9ecef",
        blueColor: "#00B7FFA1",
        secondaryColor: "#bfdbf7",
        textColor: "#022b3a"
      },
      backgroundImage: {
        'mainPhoto': "url('/main_photo.jpg')",
        'mainPhotoLand': "url('/main_photo_landscape-transformed.png')"
      },
      minHeight: {
        128: '33rem'
      }
    },
  },
  plugins: [],
}