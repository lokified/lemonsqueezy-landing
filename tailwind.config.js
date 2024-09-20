/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "secondary": "rgb(236, 252, 246)",
      white: "#FFFFFF",
      "white-1": "rgba(255, 255, 255, 0.6)",
      black: "#121217",
      "black-1": 'rgba(18, 18, 23, 0.2)',
      light: 'rgba(255, 255, 255, 0.6)',
      "light-1": 'rgba(255, 255, 255, 0.2)',
      blue: "#5423E7",
      "blue-1": "#7047EB",
      "blue-2": "#6C6C89",
      "blue-3": "#0075AD",
      "blue-4": "#6C6C89",
      pink: "#D50B3E",
      green: "#1E874C",
      magenta: "#CF75FF",
      orange: "#EB3A00",
      purple: "#DB0BB9",
      "purple-1": "#F42AD3",
      "purple-2": "#FEECFB",
      sky: "#0075AD",
      yellow: "#FFC233"
    },
    extend: {
      fontSize: {
        "4xl": "45px"
      }
    },
  },
  plugins: [],
}

