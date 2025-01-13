/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // we need to tell tailwind where our html is so that it can get the classes that we are using to include in the style file that we will create it using tailwind
    './public/*.html',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


