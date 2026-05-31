export default function About() {
  const techStack = [
    "SAP FICO",
    "Power BI",
    "CaseWare",
    "Python",
    "IFRS",
    "ISA",
    "Machine Learning",
    "Blockchain",
    "React",
    "Node.js",
    "Web3.js",
    "Solidity",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="section-divider mb-16" />
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16">
          <div className="eyebrow mb-4">About Me</div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6">
            From Big 4 Auditor to Web3 Builder
          </h2>
          <p className="text-lg text-dark-text-secondary max-w-2xl">
            A journey through finance, automation, and blockchain innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Story */}
          <div className="space-y-6 text-dark-text-secondary">
            <p className="text-base leading-relaxed">
              With <span className="text-dark-accent font-semibold">5+ years in Big 4 audit</span>,
              I've worked with Deloitte, Baker Tilly, Yousuf Adil, and now AccouConsult in Dubai.
              I led complex IFRS audits, managed multinational clients, and identified millions in
              process inefficiencies.
            </p>
            <p className="text-base leading-relaxed">
              That experience ignited a passion to <span className="text-dark-accent font-semibold">
              automate the audit</span>. I dove into AI, mastering machine learning, NLP, and AI agents.
              Simultaneously, I explored blockchain and Web3, envisioning a future where smart contracts
              and immutable ledgers revolutionize accounting.
            </p>
            <p className="text-base leading-relaxed">
              Today, I operate at the intersection of Finance, AI, and Web3 — building tools that bridge
              the gap between traditional assurance and frontier technology.
            </p>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <h3 className="eyebrow mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="surface-card px-4 py-3 rounded-lg hover:border-dark-accent/50 transition-all duration-200"
                >
                  <span className="text-sm font-medium text-dark-text">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
