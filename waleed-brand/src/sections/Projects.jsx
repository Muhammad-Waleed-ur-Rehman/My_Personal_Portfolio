const projects = [
  {
    title: "AI Financial Analyzer",
    description: "NLP model extracts financial data from PDFs and generates instant diagnostic reports with ratio analysis and anomaly detection.",
    tags: ["Python", "FastAPI", "GPT-4", "Pinecone"],
    outcome: "Reduced analysis time from hours to seconds",
  },
  {
    title: "Blockchain Audit Trail",
    description: "Immutable audit evidence system using smart contracts to log transactions visible to regulators in real-time.",
    tags: ["Solidity", "Hardhat", "IPFS", "React"],
    outcome: "Enabled real-time regulatory compliance",
  },
  {
    title: "Portfolio Risk Tracker",
    description: "Real-time risk dashboard simulating VaR and stress tests using Monte Carlo methods for institutional investors.",
    tags: ["Python", "Dash", "WebSockets", "React"],
    outcome: "200+ active beta users",
  },
  {
    title: "Smart Contract Security Sandbox",
    description: "Interactive testing environment for auditors to deploy and fuzz-test DeFi contracts safely before mainnet deployment.",
    tags: ["Foundry", "React", "Ethers.js", "Solidity"],
    outcome: "Identified 12+ critical vulnerabilities",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4">
      <div className="section-divider mb-16" />
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16">
          <div className="eyebrow mb-4">Featured Work</div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            Innovations & Projects
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-2xl">
            Building the future of audit, AI, and blockchain.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="surface-card p-6 rounded-xl group hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-dark-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-dark-text-secondary text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-dark-accent/10 border border-dark-accent/30 rounded text-dark-accent font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/6">
                <p className="text-sm text-dark-accent font-medium">
                  ✓ {project.outcome}
                </p>
              </div>

              {/* View Arrow */}
              <button className="mt-4 text-dark-accent font-semibold text-sm hover:text-white transition-colors inline-flex items-center gap-2">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
