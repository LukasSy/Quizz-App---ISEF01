// tailwind.config.js
import tailwindForms from "@tailwindcss/forms";

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: { "900_c": "var(--black_900_0c)" },
        blue_gray: { 100: "var(--blue_gray_100)", 900: "var(--blue_gray_900)", "900_01": "var(--blue_gray_900_01)",},
        gray: {
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          600: "var(--gray_600)",
          900: "var(--gray_900)",
          "300_01": "var(--gray_300_01)",
          "600_01": "var(--gray_600_01)",
        },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 4px 4px -1px #0c0c0d0c",sm:"0 4px 4px -4px #0c0c0d0c" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [tailwindForms],
};
