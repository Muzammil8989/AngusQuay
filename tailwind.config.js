/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F0EA",
        secondary: "#6F5243",
        tertiary: "#e0996e",
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"], // Add this line
        source: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
