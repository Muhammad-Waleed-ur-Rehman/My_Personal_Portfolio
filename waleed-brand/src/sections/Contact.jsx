import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
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
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <SectionTitle subtitle="CONNECT">Let's Build Together</SectionTitle>
      <GlassCard className="inline-block px-10 py-8 mb-8">
        <div className="flex items-center gap-4 text-lg cursor-pointer" onClick={copyEmail}>
          <span className="text-gray-300">{email}</span>
          <button className="text-blue-400">{copied ? <FiCheck /> : <FiCopy />}</button>
        </div>
      </GlassCard>

      <div className="flex justify-center gap-6 mb-10 text-2xl">
        {[
          { icon: <FaLinkedin />, url: config.social.linkedin },
          { icon: <FaGithub />, url: config.social.github },
          { icon: <FaTelegram />, url: config.social.telegram },
          { icon: <FaXTwitter />, url: config.social.twitter },
          { icon: <FaInstagram />, url: config.social.instagram },
          { icon: <FaDiscord />, url: config.social.discord }
        ].map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">{link.icon}</a>
        ))}
      </div>

      <a href={config.social.calendly} target="_blank" rel="noopener noreferrer">
        <Button>Schedule a Call</Button>
      </a>
      <p className="text-gray-500 mt-4 text-sm">Calendly placeholder — book a 30‑min slot.</p>
    </section>
  );
}
