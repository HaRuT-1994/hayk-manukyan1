const appColors = require('./src/assets/styles/themes/app-colors.js');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: appColors,
    extend: {
 
    },
  },
  plugins: [],
}