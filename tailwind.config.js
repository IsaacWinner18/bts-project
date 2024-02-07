/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
        "blue-999": "rgba(0, 21, 96, 1)",
        "red-990": "rgba(130, 0, 0, 1)",
        "red-992": "rgba(187, 8, 8, 1)",
        "orange-990": "rgba(199, 83, 0, 1)",
        "shade-purple": "rgba(142, 122, 253, 0.7)",
        "purple-990": "rgba(69, 0, 156, 1)",
      },
      textColor: {
        "blue-990": "rgba(0, 29, 130, 1)",
        "red-990": "rgba(130, 0, 0, 1)",
        "blue-999": "rgba(0, 21, 96, 1)"
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
        "298": "298px",
      },
      height: {
        "100": "100vh",
        "300": "253px",
        "91": "91px",
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
