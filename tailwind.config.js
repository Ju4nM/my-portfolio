/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#0A0A0A",
        customPurple: "#AE88FF"
      }
    },
  },
  plugins: [],
}

