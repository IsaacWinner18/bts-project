/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
        "red-990": "rgba(130, 0, 0, 1)",
        "shade-purple": "rgba(142, 122, 253, 0.7)",
      },
      textColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
        "red-990": "rgba(130, 0, 0, 1)",
      },
      width: {
        "30": "7.5rem",
        "12.12": "2.9rem",
        "38": "38%",
        "42": "42%",
        "85": "85%",
        "995": "995px",
        "332": "332px",
        "3.5": "34px",
      },
      height: {
        "100": "100vh",
        "300": "253px",
      },
      fontSize: {
        "27": "27.39px",
        "21": "21.04px",
      },
      borderRadius: {
        "8": "8px",
      },
      borderWidth: {
        "1": "1px"
      } 
    },
  },
  plugins: [],
};
