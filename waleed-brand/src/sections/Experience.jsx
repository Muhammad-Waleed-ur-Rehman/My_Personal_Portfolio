import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";

const experiences = [
  {
    company: "AccouConsult Dubai",
    role: "Audit & AI Integration Lead",
    period: "2024 – Present",
    impact: "Leading the automation of audit workflows using NLP and custom AI agents, reducing manual testing time by 60%.",
    tools: "Python, LangChain, IFRS, ISA"
  },
  {
    company: "Yousuf Adil (Deloitte Network)",
    role: "Audit Supervisor",
    period: "2021 – 2023",
    impact: "Managed audits of publicly listed entities; implemented data analytics for substantive testing.",
    tools: "CaseWare, SAP, Power BI"
  },
  {
    company: "Baker Tilly Dubai",
    role: "Senior Auditor",
    period: "2020 – 2021",
    impact: "Delivered high‑quality audits across real estate and manufacturing sectors; trained junior teams.",
    tools: "ISA, IFRS, CaseWare"
  },
  {
    company: "Deloitte Yousuf Adil",
    role: "Audit Senior",
    period: "2018 – 2020",
    impact: "Started as an associate and rapidly promoted due to exceptional technical and client skills.",
    tools: "Excel, SAP, IFRS"
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="CAREER">Professional Journey</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <GlassCard key={i} className="flex flex-col justify-between">
            <div>
              <span className="text-blue-400 text-sm">{exp.period}</span>
              <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
              <p className="text-gray-400 font-medium mt-1">{exp.company}</p>
              <p className="mt-4 text-gray-300">{exp.impact}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.tools.split(", ").map((tool) => (
                <span key={tool} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
