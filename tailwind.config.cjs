/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#1e78db",
        bg: "#e8ecf2",
        text: "#0d2c8b",
      },
    },
  },
  plugins: [],
};
