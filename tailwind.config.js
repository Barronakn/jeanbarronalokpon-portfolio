/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "sky-blue": "#170550",
        "purple-sky": "#31065A",
        "sky-blue-light": "#AD5BFB",
        "purple-dark": "#43366A",
      }
    },
  },
  plugins: [],
}

