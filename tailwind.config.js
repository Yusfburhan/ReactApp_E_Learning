/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        anotherblack: {
          100: "#202226",
        },
        blue: {
          1000: "#0010F7",
          350:"#02b3e4",
        },
        yellow: {
          1: "#def000",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/a.svg')",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".scrollbar-thin": {
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(31 29 29) white",
          },
          ".scrollbar-w-webkit": {
            "&::-webkit-scrollbar": {
              width: "8px !important",
            },
            "&::-webkit-scrollbar-track": {
              background: "white !important",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgb(31 41 55) !important",
              borderRadius: "20px !important",
              border: "1px solid white !important",
            },
          },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
  },
};
