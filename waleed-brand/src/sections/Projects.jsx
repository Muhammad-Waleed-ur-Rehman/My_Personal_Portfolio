import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";

const projects = [
  {
    title: "AI Financial Analyzer",
    problem: "Manual ratio analysis delays decision-making.",
    solution: "NLP model extracts financials from PDFs and generates instant diagnostic reports.",
    stack: "Python, FastAPI, GPT-4, Pinecone",
    outcome: "Reduced analysis time from hours to seconds."
  },
  {
    title: "Blockchain Audit Trail System",
    problem: "Lack of immutable audit evidence.",
    solution: "Smart contracts log every transaction, visible to regulators.",
    stack: "Solidity, Hardhat, IPFS, React",
    outcome: "Enabled real-time audit verification."
  },
  {
    title: "Portfolio Risk Tracker",
    problem: "Investors need real-time risk alerts.",
    solution: "Dashboard that simulates VaR and stress tests using Monte Carlo.",
    stack: "Python, Dash, WebSockets",
    outcome: "Used by 200+ beta users."
  },
  {
    title: "Smart Contract Security Sandbox",
    problem: "Auditors lack technical tools to test DeFi code.",
    solution: "Interactive environment to deploy and fuzz-test contracts.",
    stack: "Foundry, React, Ethers.js",
    outcome: "Identified vulnerabilities in 3 live protocols."
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="INNOVATIONS">Featured Builds</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <GlassCard key={i} className="flex flex-col">
            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4"><span className="text-white">Problem:</span> {p.problem}</p>
            <p className="text-gray-300 flex-1"><span className="text-white">Solution:</span> {p.solution}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.split(", ").map((t) => (
                <span key={t} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md">{t}</span>
              ))}
            </div>
            <p className="mt-4 text-green-400 text-sm">✓ {p.outcome}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
