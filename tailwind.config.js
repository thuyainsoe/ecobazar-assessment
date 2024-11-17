/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black2: "#1A1A1A",
        darkgray: "#808080",
        mdgray: "#999",
        mddarkgray: "#4D4D4D",
        lightgray: "#E6E6E6",
        brandsuccess: "#00B207",
        successdark: "#2C742F",
        greenish: "#EDF2EE",
        charcol: "#333",
        warning: "#FF8A00",
        offwhite: "#F2F2F2",
      },
      screens: {
        mxl: "960px",
        lgxxl: "1120px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
