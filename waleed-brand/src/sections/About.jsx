import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="MY STORY">The Transformation</SectionTitle>
      <GlassCard className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
        <p>
          With over <strong className="text-white">5+ years in Big4 audit</strong>, I've worked with
          Deloitte, Baker Tilly, Yousuf Adil, and now AccouConsult in Dubai. I led complex IFRS audits,
          managed multinational clients, and uncovered millions in process inefficiencies.
        </p>
        <p>
          That experience ignited a passion to <strong className="text-blue-400">automate the audit</strong>.
          I dove into AI, mastering machine learning, NLP, and AI agents. Simultaneously, I explored
          blockchain and Web3, envisioning a future where <strong className="gradient-text">smart contracts and
          immutable ledgers</strong> revolutionize accounting.
        </p>
        <p>
          Today, I operate at the intersection of Finance, AI, and Web3 — building tools that bridge
          the gap between traditional assurance and frontier technology.
        </p>
      </GlassCard>
    </section>
  );
}
