/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '5%',
    },
    fontFamily: {
      Raleway: ["Raleway"],
    },
    screens: {
      sm: '480px',
      md: '840px',
      lg: '990px',
      xl: '1440px',
    },
    extend: { // hier können die Standardwerte von Tailwind um eigene erweitert werden (z. B. eigene Farben, Screengrößen, Abstände, etc.)
      colors: {
        moviered_light:"#F00400",
        moviered: "#ab0200",
        moviered_dark: "#831010",
        moviered_extradark: "#510B0B",
      }
    },
  },
  plugins: [],
}