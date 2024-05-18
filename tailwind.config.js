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
        "c-gray-100": "#F3F8FF",
        "c-red-dark-800": "#CE1126",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}