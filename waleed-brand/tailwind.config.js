/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#ffffff",
          card: "rgba(0,0,0,0.02)",
          border: "rgba(0,0,0,0.08)",
          accent: "#000000",
        },
        neon: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          gold: "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #f0f9ff 0%, #f5f3ff 100%)",
        "gradient-neon": "linear-gradient(135deg, #000000 0%, #374151 100%)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 4s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "flow": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
