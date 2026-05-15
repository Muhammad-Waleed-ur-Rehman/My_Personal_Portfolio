import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

export default function StickyChatButton() {
  return (
    <motion.a
      href="#chatbot"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-brand rounded-full shadow-lg shadow-blue-500/30 text-white"
      whileHover={{ scale: 1.1 }}
    >
      <FiMessageCircle size={24} />
    </motion.a>
  );
}
