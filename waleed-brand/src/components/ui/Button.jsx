import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", className, ...props }) {
  const base = "px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md";
  const variants = {
    primary: "bg-gradient-brand text-white hover:shadow-lg hover:shadow-blue-500/25",
    secondary: "border border-white/20 hover:bg-white/5",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
