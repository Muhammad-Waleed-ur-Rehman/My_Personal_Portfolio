import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="max-w-4xl relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 tracking-widest text-sm mb-6"
        >
          AUDITOR → AI ENGINEER → WEB3 BUILDER
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Muhammad <span className="gradient-text">Waleed</span> Ur Rehman
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          I build AI + Web3 systems that turn complex financial problems into automated intelligent solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button>
            View Work <FiArrowRight className="inline ml-2" />
          </Button>
          <Button variant="secondary">Hire Me</Button>
        </motion.div>
      </div>
    </section>
  );
}
