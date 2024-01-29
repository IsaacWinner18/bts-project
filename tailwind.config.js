/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
        "shade-purple": "rgba(142, 122, 253, 0.7)",
      },
      textColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
      },
      width: {
        "30": "7.5rem",
        "12.12": "2.9rem",
        "38": "38%",
        "42": "42%",
        "85": "85%",
      },
      height: {
        "100": "100vh",
      },
    },
  },
  plugins: [],
};
