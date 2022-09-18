/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        twitter_blue_primary: "#2D9BF0",
        twitter_blue_disabled: "#91CEF7",
        twitter_blue_hover: "#E9F5FD",
        twitter_cards_background: "#EFF3F4",
      },
    },
  },
  plugins: [],
};
