import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "cst-md": "980px",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideUpFadeIn: "slideUpFadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { translateY: "0.5" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        slideUpFadeIn: {
          "0%": { opacity: " 0", transform: "translateY(10%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern": `
          linear-gradient(to right, rgba(255, 255, 255, 0.04) 0.1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 0.1px, transparent 1px)
        `,
      },
    },
  },
  plugins: [],
};
export default config;
