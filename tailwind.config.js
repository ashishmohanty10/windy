/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-color":"#5272F2",
        "secondary-color":"#6B7280",
        "background-color":"#EEF5FF"
      },

      font:{
        "font-primary":"Inter"
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },

  plugins: [],
}