import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        serif: ["Cardo", "serif"],
        work: ["WorkSans"],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        darkBlue: "#0f172a",
        neutral: {
          750: "#2d2d2d",
        },
      },
      spacing: {
        14: "3.5rem",
      },
      margin: {
        large: "75rem",
        medium: "63.75rem",
      },
      letterSpacing: {
        widest: "0.3em",
      },
      height: {
        large: "37.5rem",
      },
      screens: {
        '3xl': '1800px'
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
          "5xl": "2.75rem",
          "9xl": ["7.5rem", "1"],
         
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
      supports: {
        sda: "timeline-scope: none",
      },
    },
  },
  plugins: [containerQueries],
};
