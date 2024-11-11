/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
      },
      width: {
        '26': '108px',
        '76': '300px',
        '100': '720px', // Aquí defines la clase w-26 con 26px
      },
      height: {
        '26': '108px',
        '100': '640px', // Aquí defines la clase w-26 con 26px
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
