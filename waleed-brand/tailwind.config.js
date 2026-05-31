/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ConsenSys Design System
        dark: {
          bg: "#0c0c0c",
          surface: "#141414",
          text: "#ffffff",
          "text-secondary": "#888888",
          accent: "#c1ff14",
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        "display": ["72px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["96px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "stat": ["56px", { lineHeight: "1.1", fontWeight: "700" }],
        "eyebrow": ["11px", { lineHeight: "1.2", letterSpacing: "0.2em", textTransform: "uppercase" }],
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-bottom))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(193, 255, 20, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(193, 255, 20, 0.5)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(193, 255, 20, 0.08)",
        "glow-lg": "0 0 40px rgba(193, 255, 20, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
