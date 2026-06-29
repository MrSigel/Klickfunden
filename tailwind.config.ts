import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary background — deep, near-black green
        ink: {
          DEFAULT: "#003333",
          900: "#001f1f",
          800: "#002828",
          700: "#003333",
          600: "#0a4040",
          500: "#155050",
        },
        // Accent / CTA — "Martian Green"
        marsgreen: {
          DEFAULT: "#99CC33",
          50: "#f3f9e6",
          100: "#e3f0c4",
          300: "#c0e077",
          400: "#aada4f",
          500: "#99CC33",
          600: "#7eac26",
          700: "#638520",
        },
        mist: {
          50: "#f6f8f7",
          100: "#e9ede9",
          300: "#bccac6",
          400: "#94a9a4",
          500: "#6f8884",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(153,204,51,0.16), transparent 60%)",
        "noise-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(153,204,51,0.25), 0 8px 30px -8px rgba(153,204,51,0.35)",
        card: "0 10px 40px -12px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.8s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
