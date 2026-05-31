import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#070809",
          900: "#0b0d10",
          850: "#0f1216",
          800: "#13171c",
          700: "#1b2129",
          600: "#283039",
        },
        accent: {
          DEFAULT: "#6ee7b7",
          muted: "#34d399",
          glow: "#10b981",
        },
        ink: {
          DEFAULT: "#e6edf3",
          muted: "#9aa7b4",
          faint: "#697582",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(110,231,183,0.12), 0 8px 40px -12px rgba(16,185,129,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -20px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
