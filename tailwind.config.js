const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        "c-blue-black-800": "#002D62",
        "c-blue-black-700": "#194272",
        "c-blue-black-900": "#02033B",
        "c-red-600": "#CE1126",
        "c-gray-100": "#F3F8FF",
        "c-blue-gray-100": "#F4FBFD",
        "c-red-dark-800": "#CE1126",
        "c-rose-200": "#D1C7BE",
        "c-brown-600": "#201E1D",
        
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}