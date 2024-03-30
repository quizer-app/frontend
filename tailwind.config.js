/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        primaryDark: "#090E34",
        // primary: "#090e34",

        secondary: "#FCFCFC",
        secondaryDark: "#1D2144",
        // secondary: "#1D2144",
        lightBlue: "#4A6CF7",

        textHover: "#4A6CF7",
        textHoverDark: "#9BA1B3",
        // textHover: "#9BA1B3",

        textPrimary: "#788293",
        textPrimaryDark: "#959CB1",
        // textPrimary: "#959CB1",

        input: "#F8F8F8",
        inputDark: "#242B51",
        // input: "#242B51",

        secondBlue: "#A4B5FB",
        secondBlueDark: "#2C409E",

        // fix for light mode
        lightBlueB: "#6f86e0",
      },
      fontFamily: {
        primary: ["Inter"],
      },
      opacity: {
        2: "0.98",
      },
    },
  },
  plugins: [],
};
