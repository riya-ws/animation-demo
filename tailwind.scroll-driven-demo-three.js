import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/scroll-driven-demo-three"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        serif: ["Cardo", "serif"],
      },
      backgroundImage: {
        noise: 'url("/img/3/noise.png")',
      },
      supports: {
        sda: "timeline-scope: none",
      },
    },
  },
  plugins: [containerQueries],
};
