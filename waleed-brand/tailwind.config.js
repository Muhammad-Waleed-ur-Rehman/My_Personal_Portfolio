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
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
