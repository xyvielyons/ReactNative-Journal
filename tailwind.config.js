/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
          primarycolor:"#F5F6FA",
          coolGray60:"#697077",
          coolGray80:"#343A3F",
          coolGray90:"#21272A"

      },
      fontFamily: {
        rthin: ["Roboto_100Thin", "sans-serif"],
        rlight: ["Roboto_300Light", "sans-serif"],
        rregular: ["Roboto_400Regular", "sans-serif"],
        rmedium: ["Roboto_500Medium", "sans-serif"],
        rbold: ["Roboto_700Bold", "sans-serif"],
        rblack: ["Roboto_900Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

