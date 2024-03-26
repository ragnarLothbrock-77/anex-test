import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./layout/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "shadow-on": "2px 7px 5px rgba(0,0,0,0.3), 0px - 4px 10px rgba(255,255,255,0.3)"
      }
    },
  }
};
export default config;
