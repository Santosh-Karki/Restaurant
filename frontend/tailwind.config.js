/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "text-rose-900",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
};
