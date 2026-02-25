import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a08",
        "bg-surface": "#111110",
        "text-primary": "#f0ede6",
        "text-muted": "#8a8680",
        accent: "#c8a97e",
        border: "rgba(240,237,230,0.08)",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};

export default config;
