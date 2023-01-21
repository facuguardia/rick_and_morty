/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#00cce2",
        tertiary: "#17F517",
      },
      backgroundImage: {
        landing: "url('/src/assets/landing-2.jpg')",
      },
      plugins: [],
    },
  },
};
