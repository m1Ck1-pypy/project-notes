/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        80: '80px'
      },
      minWidth: {
        210: "210px",
        300: "300px",
        350: "350px",
        620: "620px",
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
      },
      textColor: {
        textDarkMode: 'hsla(0, 0%, 94%, 1)',
        textLightMode: 'hsla(360, 0%, 9%, 1)'
      },
      boxShadow: {
        element: '-5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35), inset -5px -5px 15px rgba(255, 255, 255, 0.1),inset 5px 5px 15px rgba(0, 0, 0, 0.35)'
      },
      transitionDuration: {
        400: "0.4s"
      }
    },
  },
  plugins: [],
}