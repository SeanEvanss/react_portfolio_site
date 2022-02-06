module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {    
    extend: {
      colors:{
        "custom_gray":"#31393C",
        "custom_dark_blue":"#027BCE",
        "custom_light_blue":"#0496FF",
        "custom_orange":"#FF8811",
        "pure_white":"#FFFFFF",
        "pure_black":"#000000",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
