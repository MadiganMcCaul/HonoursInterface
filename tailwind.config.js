/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        barcode: ["'Libre Barcode 128 Text'"],
      },

      colors: {
        primary: {
          DEFAULT: "#D30F22",
          50: "#F8A1AA",
          100: "#F78E98",
          200: "#F46876",
          300: "#F24253",
          400: "#EF1C30",
          500: "#D30F22",
          600: "#9F0B1A",
          700: "#6A0811",
          800: "#360409",
          900: "#010000",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
