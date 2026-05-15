/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050814",
          card: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.06)",
          accent: "#3b82f6",
        },
        neon: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          gold: "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)",
        "gradient-neon": "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)",
        "gradient-holographic": "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(245, 158, 11, 0.1) 100%)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 4s linear infinite",
        "cyber-grid": "cyber-grid 20s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))" },
          "50%": { opacity: "0.7", filter: "drop-shadow(0 0 16px rgba(6, 182, 212, 0.3))" },
        },
        "flow": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "cyber-grid": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
