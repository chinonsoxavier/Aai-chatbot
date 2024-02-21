import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*",
  ],
  theme: {
    extend: {
      colors: {
        primary_green: "#44ce6f",
        primary_purple: "#c679e3",
        dark_text: "#6084a4",
        darker_text: "#0e314c",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      mobile: { min: "0px", max: "380px" },
      medium: { max: "580px" },
      tablet: { max: "768px" },
      base: { max: "992px" },
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
