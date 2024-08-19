/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ground: "#0A0A0A",
        ground: "#100E18",
        customPurple: "#AE88FF",
        customGray: "#1f1f1f",
        customGrayLight: "#333333"
      }
    },
  },
  plugins: [],
}

