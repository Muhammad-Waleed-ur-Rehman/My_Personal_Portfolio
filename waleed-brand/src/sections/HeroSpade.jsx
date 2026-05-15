import { motion } from "framer-motion";

export default function HeroSpade() {
  return (
    <section className="min-h-screen bg-white text-gray-900 px-6 py-24 flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 mb-6 font-medium"
        >
          AI Engineer • Web3 Builder • Audit Automation Expert
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          Transform complexity into clarity
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          AI-powered audit automation, smart contract verification, and blockchain solutions for financial institutions and Web3 platforms.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-200 pt-12"
        >
          <p className="text-gray-600 font-medium mb-8">Trusted by leading fintechs and Fortune 500 institutions</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">Stripe</div>
            <div className="text-2xl font-bold text-gray-400">Coinbase</div>
            <div className="text-2xl font-bold text-gray-400">Ripple</div>
            <div className="text-2xl font-bold text-gray-400">Circle</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
