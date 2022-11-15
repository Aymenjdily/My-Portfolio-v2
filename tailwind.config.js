/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Container/**/*.{js,ts,jsx,tsx}",
    "./Shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#272932",
        blue: "#1C7293",
        green:"#B9E3C6",
        gray:"#F1F2EB",
        white:"#fff"
      },
      fontFamily: {
        Quicksand : ["Jost", "sans-serif"],
        Paytone : ["Paytone One" , "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}