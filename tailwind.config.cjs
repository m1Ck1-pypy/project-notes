/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        300: "300px",
        400: "400px",
        600: "600px",
        700: "700px",
      },
      height: {
        80: '80px'
      },
      minHeight: {
        300: "300px"
      },
      minWidth: {
        180: "180px",
        210: "210px",
        300: "300px",
        350: "350px",
        400: "400px",
        700: "700px",
      },
      maxWidth: {
        210: "210px",
        300: "300px",
        350: "350px",
        400: "400px",
        700: "700px",
      },
      screens: {
        ssm: "470px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      backgroundColor: {
        mainBg: 'hsla(0, 0%, 5%, 1)',
        bgCardHover: 'rgba(0, 0, 0, 0.15)',
        bgDarkMode: 'hsla(0, 0%, 94%, 1)',
        btmHover: 'hsla(126, 100%, 50%, 0.7)',
      },
      borderColor: {
        borderLightMode: 'hsla(360, 0%, 9%, 1)',
        borderDarkMode: 'hsla(0, 0%, 94%, 1)',
      },
      boxShadow: {
        element: '-5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35), inset -5px -5px 15px rgba(255, 255, 255, 0.1),inset 5px 5px 15px rgba(0, 0, 0, 0.35)'
      },
      textColor: {
        textDarkMode: 'hsla(0, 0%, 94%, 1)',
        textLightMode: 'hsla(360, 0%, 9%, 1)'
      },
      letterSpacing: {
        1: "1px"
      },
      transitionDuration: {
        400: "0.4s"
      },
      gridTemplateColumns: {
        'notes': 'repeat(auto-fit, minmax(250, 1fr))'
      },
      gridAutoRows: {
        250: '250px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}