import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "box-right-bottom-shadow":
          "0 3px 6px rgba(0,0,0,0.16), 3px 6px rgba(0,0,0,0.23)",
      },
      transitionProperty: {
        wrapper: "padding-left ease,margin-right ease",
      },
    },
  },
  plugins: [],
};
export default config;
