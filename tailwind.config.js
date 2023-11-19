/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1875b9",
      },

      screens: {
        "2xl": "1440px",
      },
    },
  },
  corePlugins: {
    container: false,
    // preflight: false,
  },
  plugins: [],
};
