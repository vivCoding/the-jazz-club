/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "512px",
      sm: "640px",
      md: "768px",
      mdlg: "896px",
      lg: "1024px",
      lgxl: "1152px",
      xl: "1280px",
      "2xl": "1536px",
    },
    // extend: {
    //   fontFamily: {
    //     // sans: ["Lexend", ...defaultTheme.fontFamily.serif],
    //   },
    // },
  },
  plugins: [],
}
