const { fontFamily } = require("typescript");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ["Noto Sans", "Tenor Sans", "sans-serif"],
        serif: ["Alice", "serif"],
      },
      colors: {
        primary: {
          50: "#A9B9D9",
          100: "#46659F",
          200: "#2F446A",
        },
        secondary: {
          50: "#70B8A9",
          100: "#295249",
          200: "#19332E",
        },
        brand: {
          50: "#594842",
          100: "#463934",
          200: "#171311",
        },
      },
      boxShadow: {
        "button-hard": "2px 2px 0px 0px #000000",
        "button-hard-hover": "4px 4px 0px 0px #000000",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
