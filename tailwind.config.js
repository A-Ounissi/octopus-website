/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // We override "font-sans" so Tailwind's "font-sans" now points to SpaceGroteskVF
        sans: ["SpaceGroteskVF", "sans-serif"],
      },
      colors: {
        primaryBg: "#e2e8f0",     // cool off-white
        accent: "#3b82f6",        // blue-500
        accentDark: "#1d4ed8",    // blue-700
        accentLight: "#d0e7ff",   // soft light blue
      },
    },
  },
  plugins: [],
};
