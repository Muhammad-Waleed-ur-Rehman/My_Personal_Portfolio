import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";

const skillGroups = [
  {
    category: "Audit & Finance",
    skills: [
      { name: "IFRS", pct: 95 },
      { name: "ISA", pct: 90 },
      { name: "CaseWare", pct: 85 },
      { name: "SAP", pct: 75 },
      { name: "Internal Controls", pct: 92 },
      { name: "Risk Assessment", pct: 88 }
    ]
  },
  {
    category: "AI / ML / Deep Learning",
    skills: [
      { name: "Python", pct: 82 },
      { name: "TensorFlow", pct: 70 },
      { name: "PyTorch", pct: 65 },
      { name: "NLP", pct: 78 },
      { name: "LangChain", pct: 72 },
      { name: "AI Agents", pct: 68 }
    ]
  },
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Solidity", pct: 75 },
      { name: "Smart Contracts", pct: 70 },
      { name: "Ethereum", pct: 78 },
      { name: "DeFi", pct: 60 },
      { name: "Hardhat", pct: 65 }
    ]
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Power BI", pct: 90 },
      { name: "Excel (Advanced)", pct: 95 },
      { name: "Pandas", pct: 80 },
      { name: "SQL", pct: 85 },
      { name: "Data Visualization", pct: 88 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="EXPERTISE">Skills & Technologies</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group) => (
          <GlassCard key={group.category}>
            <h3 className="text-xl font-bold mb-6 text-blue-400">{group.category}</h3>
            <ul className="space-y-4">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">{skill.name}</p>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-brand rounded-full"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
