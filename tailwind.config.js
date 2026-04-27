const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // or ./src/app/...
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // or ./src/components/...

    // CRITICAL: This line tells Tailwind to styles the HeroUI components
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
