import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-black "atelier" surfaces
        base: {
          950: "#0a0908",
          900: "#0d0c0a",
          850: "#13110e",
          800: "#1a1714",
          700: "#2a251f",
          600: "#3b342b",
        },
        // Gold primary accent
        accent: {
          DEFAULT: "#e8b86d",
          muted: "#f6d79a",
          glow: "#c8954a",
        },
        gold: {
          DEFAULT: "#e8b86d",
          bright: "#f6d79a",
          deep: "#c8954a",
        },
        // Cool counter-signal, used sparingly for "live"
        mint: "#74e0be",
        // Bone-white text ramp
        ink: {
          DEFAULT: "#ece5d8",
          muted: "#a99f8e",
          faint: "#6f665a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(232,184,109,0.14), 0 10px 50px -14px rgba(200,149,74,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 18px 50px -28px rgba(0,0,0,0.9)",
        lift: "0 1px 0 0 rgba(255,255,255,0.07) inset, 0 40px 80px -30px rgba(0,0,0,0.95), 0 0 0 1px rgba(232,184,109,0.22)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(236,229,216,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(236,229,216,0.04) 1px, transparent 1px)",
        "gold-sheen":
          "linear-gradient(110deg, transparent 30%, rgba(246,215,154,0.18) 48%, transparent 66%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(14px)", transform: "translateY(14px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.65" },
          "50%": { transform: "translate3d(4%,-5%,0) scale(1.15)", opacity: "1" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.9s ease both",
        "scale-in": "scale-in 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "blur-in": "blur-in 0.9s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
        "aurora-slow": "aurora 18s ease-in-out infinite",
        "aurora-fast": "aurora 12s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 36s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
