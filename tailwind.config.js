/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        fusiondark: {
          primary: "#44ecfd",

          secondary: "#F5F8FA",

          accent: "#5aabb2",

          neutral: "#222",

          "base-100": "#303030",

          info: "#7298DF",

          success: "#34DAA0",

          warning: "#FCDF5F",

          error: "#E15941",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
