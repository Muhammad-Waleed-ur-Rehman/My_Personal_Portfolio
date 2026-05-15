import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTelegram, FaXTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";
import config from "../config";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = config.social.email;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to explore AI-driven solutions or blockchain innovations? Let's connect.
          </p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-12"
          >
            <button
              onClick={copyEmail}
              className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-900 rounded-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <span>{email}</span>
              {copied ? <FiCheck className="w-5 h-5" /> : <FiCopy className="w-5 h-5" />}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mb-12 text-3xl"
          >
            {[
              { icon: <FaLinkedin />, url: config.social.linkedin },
              { icon: <FaGithub />, url: config.social.github },
              { icon: <FaTelegram />, url: config.social.telegram },
              { icon: <FaXTwitter />, url: config.social.twitter },
              { icon: <FaInstagram />, url: config.social.instagram },
              { icon: <FaDiscord />, url: config.social.discord }
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#000" }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href={config.social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Schedule a Call
          </motion.a>
          <p className="text-gray-600 mt-6 text-sm">Book a 30-min consultation to discuss your project</p>
        </motion.div>
      </div>
    </section>
  );
}
