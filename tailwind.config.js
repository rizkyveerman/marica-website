/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        sm: "0 5px 5px rgba(99, 121, 242, 0.15)",
        lg: "0 35px 35px rgba(99, 121, 242, 0.15)",
        xl: "0 35px 35px rgba(99, 121, 242, 0.15)",
        "2xl": "0 35px 35px rgba(99, 121, 242, 0.15)",
        "3xl": "0 35px 35px rgba(99, 121, 242, 0.15)",
        "4xl": [
          "0 35px 35px rgba(99, 121, 242, 0.25)",
          "0 45px 65px rgba(99, 121, 242, 0.15)",
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
