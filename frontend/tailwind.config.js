/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      secondary: "Open Sans",
    },
    container: {
      padding: {
        DEFAULT: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1038px",
    },
    extend: {
      colors: {
        primary: {
          100: "#ffccd5",
          200: "#fb6f92",
          300: "f20089",
        },
        neutral: {
          100: "#dac7ff",
          200: "#ac8bee",
          300: "#7151a9",
          400: "#46325d",
          500: "#3f3649",
        },
        page: "#fcfcff",
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner/bg3.png')",
        faq: "url('/src/assets/img/faq/bg.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        custom: "95%",
      },
    },
  },
  plugins: [],
};
