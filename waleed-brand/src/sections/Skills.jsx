const skills = [
  { name: "IFRS", category: "Audit" },
  { name: "ISA", category: "Audit" },
  { name: "CaseWare", category: "Audit" },
  { name: "SAP FICO", category: "Enterprise" },
  { name: "Power BI", category: "Analytics" },
  { name: "Advanced Excel", category: "Analytics" },
  { name: "Python", category: "Programming" },
  { name: "Machine Learning", category: "AI" },
  { name: "NLP", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Solidity", category: "Blockchain" },
  { name: "Smart Contracts", category: "Blockchain" },
  { name: "Web3.js", category: "Blockchain" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL", category: "Database" },
];

const categories = {
  Audit: "#c1ff14",
  Enterprise: "#888888",
  Analytics: "#888888",
  Programming: "#c1ff14",
  AI: "#c1ff14",
  Blockchain: "#c1ff14",
  Frontend: "#888888",
  Backend: "#888888",
  Database: "#888888",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4">
      <div className="section-divider mb-16" />
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16">
          <div className="eyebrow mb-4">Expertise</div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold">
            Skills & Certifications
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, idx) => {
            const isAccent = skill.category === "Audit" || skill.category === "Programming" || skill.category === "AI" || skill.category === "Blockchain";
            return (
              <div
                key={idx}
                className={`surface-card px-4 py-3 rounded-lg text-center transition-all duration-200 hover:scale-105 ${
                  isAccent ? "border-dark-accent/50 hover:border-dark-accent" : "hover:border-white/20"
                }`}
              >
                <p className={`text-sm font-medium ${isAccent ? "text-dark-accent" : "text-dark-text"}`}>
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="mt-16 pt-16 border-t border-white/6">
          <h3 className="eyebrow mb-8">Certifications & Credentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { cert: "CA Finalist", issuer: "ICAP Pakistan" },
              { cert: "Big 4 Audit", issuer: "Deloitte & Yousuf Adil" },
              { cert: "IFRS Expert", issuer: "IASB Certified" },
              { cert: "AI Practitioner", issuer: "Self-certified" },
            ].map((item, idx) => (
              <div key={idx} className="surface-card p-6 rounded-xl">
                <p className="text-dark-accent text-sm font-semibold uppercase tracking-wider">
                  {item.cert}
                </p>
                <p className="text-dark-text-secondary text-xs mt-2">
                  {item.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
