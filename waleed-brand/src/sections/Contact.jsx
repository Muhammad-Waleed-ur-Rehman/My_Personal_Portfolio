import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";
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
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="section-divider mb-16" />
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="eyebrow mb-4 justify-center inline-block w-full">
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg text-dark-text-secondary mb-12 max-w-2xl mx-auto">
            Ready to explore AI-driven solutions or blockchain innovations? I'd love to connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-3xl mx-auto">
          {/* Email */}
          <div className="surface-card p-8 rounded-xl mb-12">
            <p className="text-dark-text-secondary text-sm uppercase tracking-wider mb-4">
              Email
            </p>
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${email}`}
                className="text-2xl md:text-3xl font-bold text-dark-accent hover:text-white transition-colors"
              >
                {email}
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-dark-accent/10 hover:bg-dark-accent/20 border border-dark-accent/30 rounded-lg transition-all duration-200 text-dark-accent"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4" />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="surface-card p-8 rounded-xl mb-12">
            <p className="text-dark-text-secondary text-sm uppercase tracking-wider mb-6">
              Follow & Connect
            </p>
            <div className="flex gap-6">
              {[
                { icon: <FaLinkedin className="w-6 h-6" />, url: config.social.linkedin, label: "LinkedIn" },
                { icon: <FaGithub className="w-6 h-6" />, url: config.social.github, label: "GitHub" },
                { icon: <FaTelegram className="w-6 h-6" />, url: config.social.telegram, label: "Telegram" },
                { icon: <FaXTwitter className="w-6 h-6" />, url: config.social.twitter, label: "Twitter" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-accent hover:text-white transition-colors p-3 rounded-lg hover:bg-dark-accent/10"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={config.social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block mb-4"
            >
              Schedule a 30-Min Call
            </a>
            <p className="text-dark-text-secondary text-sm">
              Let's discuss your next project or opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
