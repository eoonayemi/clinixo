/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        around: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        "around-md": "0 0 15px 2px rgba(0, 0, 0, 0.1)",
        "around-lg": "0 0 25px 5px rgba(0, 0, 0, 0.15)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      colors: {
        primary: "#e62727",
      },
    },
  },
  plugins: [],
};
