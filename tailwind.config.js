/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        semangka: "#D9325E",
        "bad-blueberry": "#00093D",
        blueberry: "#6379F2",
        mangga: "#1BBFA1",
        sirsak: "#DFF2EF",
        jeruk: "#F2B441",
        arang: "#1B1B2F",
        abu: "#49495C",
        "abu-terang": "#EAEFFA",
        white: "#fff",
      },
      dropShadow: {
        1: "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};
