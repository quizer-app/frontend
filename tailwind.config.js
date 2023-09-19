/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090E34",
        secondary: "#1D2144",
        lightBlue: "#4A6CF7",
        textHover: "#9BA1B3",
        // XX
        textPrimary: "#959CB1",
        input: "#242B51",
        headerScrolled: "#3B82F6",
        footer: "#4A6CF70D",
      },
      fontFamily: {
        primary: ["Inter"],
      },
    },
  },
  plugins: [],
};
