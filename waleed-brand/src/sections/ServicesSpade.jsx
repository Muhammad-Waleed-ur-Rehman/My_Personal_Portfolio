import { motion } from "framer-motion";
import { FiShield, FiLayers, FiZap, FiTrendingUp } from "react-icons/fi";

export default function ServicesSpade() {
  const services = [
    {
      icon: FiShield,
      title: "Smart Contract Auditing",
      description: "Deep security analysis and vulnerability detection for blockchain protocols and DeFi contracts. Real-time risk assessment powered by AI.",
      link: "#services",
    },
    {
      icon: FiLayers,
      title: "Audit Automation",
      description: "Automated compliance and audit workflows reducing manual overhead by 80%. Process financial transactions and smart contracts at scale.",
      link: "#services",
    },
    {
      icon: FiZap,
      title: "AI-Powered Verification",
      description: "Neural networks trained on blockchain data for instant pattern detection and anomaly identification across transactions.",
      link: "#services",
    },
    {
      icon: FiTrendingUp,
      title: "Web3 Infrastructure",
      description: "End-to-end blockchain solutions including token design, protocol optimization, and decentralized application architecture.",
      link: "#services",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Built for every layer of finance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions spanning risk, compliance, intelligence, and Web3 infrastructure.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-gray-900 mb-6 group-hover:text-gray-700 transition-colors" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Learn more →
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center border-t border-gray-200 pt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to transform your operations?
          </h3>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
