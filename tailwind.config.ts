import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#20221D",
        panel: "#292B24",
        cream: "#EDE9DD",
        soft: "#A8A79B",
        gold: "#D9A62E",
        line: "#3C3E35",
      },
      fontFamily: {
        display: ["var(--font-archivo)"],
        body: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
