/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#34B08F",
        textNav: "#7a7a7a",
        orange: "#E4A43E",
      },
      animation: {
        pop: "popBtn 1s  infinite",
      },
      keyframes: {
        popBtn: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
