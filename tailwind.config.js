/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        primary: "5rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
