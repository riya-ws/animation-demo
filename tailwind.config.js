/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      work: ["WorkSans"],
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },

      fontSize: {
        xxs: "10px",
        screens: {
          minSize: "23.375rem",
          xxs: "28rem",
          xs: "23.125rem",
          sm: "40rem",
          md: "48rem",
          lg: "64rem",
          xl: "80rem",
          "2xl": "96rem",
        },
        container: {
          center: true,
          padding: "1rem",
          screens: {
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "1172px",
            "2xl": "1172px",
          },
        },
      },
    },
  },
};
