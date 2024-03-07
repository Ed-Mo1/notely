/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        gray: {
          900: "#212121",
          200: "#757575",
        },
        blue: {
          400: "#42A5F5",
          500: "#2196F3",
        },
        orange: {
          900: "#E65100",
          200: "#FFCC80",
        },
        green: {
          900: "#1B5E20",
          200: "#A5D6A7",
        },
        deepPurple: {
          900: "#4527A0",
          200: "#B39DDB",
        },
        red: {
          400: "#EF5350",
          500: "#F44336",
        },
      },
    },
  },
  plugins: [],
};
