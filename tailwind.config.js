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
          light: "#F8FAFC",
          dark: "#0F172A",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E293B",
        },
        secondary: {
          light: "#0284C7",
          dark: "#38BDF8",
        },
        accent: {
          light: "#10B981",
          dark: "#34D399",
        },
        highlight: {
          light: "#0F172A",
          dark: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
