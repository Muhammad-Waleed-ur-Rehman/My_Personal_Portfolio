const experiences = [
  {
    company: "AccouConsult Dubai",
    role: "Associate Accountant",
    period: "2024 – Present",
    bullets: [
      "Leading automation of audit workflows using NLP and AI agents",
      "Reducing manual testing time by 60% through intelligent process automation",
      "Implementing blockchain solutions for audit trail immutability",
    ],
    tools: "Python, LangChain, IFRS, ISA",
  },
  {
    company: "Yousuf Adil (Deloitte Network)",
    role: "Audit Supervisor",
    period: "2021 – 2023",
    bullets: [
      "Managed audits of publicly listed entities across multiple sectors",
      "Implemented data analytics for substantive testing and risk assessment",
      "Trained junior audit staff on advanced ISA standards",
    ],
    tools: "CaseWare, SAP, Power BI",
  },
  {
    company: "Baker Tilly Dubai",
    role: "Senior Auditor",
    period: "2020 – 2021",
    bullets: [
      "Delivered audits across real estate and manufacturing sectors",
      "Developed custom Excel-based analytics tools for audit efficiency",
      "Led team management and mentorship initiatives",
    ],
    tools: "ISA, IFRS, CaseWare",
  },
  {
    company: "Deloitte Yousuf Adil",
    role: "Audit Associate",
    period: "2018 – 2020",
    bullets: [
      "Conducted audits for multinational corporations and local entities",
      "Achieved rapid promotion due to technical expertise",
      "Built foundations in IFRS and international audit standards",
    ],
    tools: "Excel, SAP, IFRS",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4">
      <div className="section-divider mb-16" />
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16">
          <div className="eyebrow mb-4">Professional Journey</div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold">
            Career Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="surface-card p-6 rounded-xl hover:border-dark-accent/30 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Period */}
                <div>
                  <p className="text-sm text-dark-text-secondary uppercase tracking-wider">
                    {exp.period}
                  </p>
                </div>

                {/* Company & Role */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-dark-accent group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-dark-text-secondary font-medium mt-1">
                    {exp.company}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-dark-text-secondary flex items-start"
                      >
                        <span className="text-dark-accent mr-3 mt-1">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-xs text-dark-text-secondary uppercase tracking-wider mb-3">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.split(", ").map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs bg-dark-accent/10 border border-dark-accent/30 rounded text-dark-accent font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
