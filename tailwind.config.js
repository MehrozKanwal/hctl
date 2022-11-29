/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'appColor':'#990030',
      'white':'#fff'

    },
    extend: {
    },
  },
  plugins: [
    require('daisyui')
  ]
}
