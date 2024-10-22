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
        darkBlue:"#0f172a",
        neutral: {
          '750': '#2d2d2d'
        }
      },

      margin: {
        large: "75rem",
        medium:"63.75rem"
      },

      height: {
        large: "37.5rem",
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
      supports: {
          sda: 'timeline-scope: none'
        }
    },
  },
};
