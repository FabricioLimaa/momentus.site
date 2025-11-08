/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#e6e6e6",
          dark: "#012661",
        },
        secondary: {
          light: "#26999f",
          dark: "#26999f",
        },
        accent: {
          light: "#41e295",
          dark: "#41e295",
        },
        highlight: {
          light: "#012661",
          dark: "#e6e6e6",
        },
      },
    },
  },
  plugins: [],
};
