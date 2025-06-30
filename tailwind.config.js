/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Disable Tailwind’s default resets
  },
  plugins: [],
};