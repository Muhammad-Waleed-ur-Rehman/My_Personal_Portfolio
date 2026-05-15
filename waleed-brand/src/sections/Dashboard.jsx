import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";
import { gitHubContributions, repoStats, learningProgress } from "../data/dashboardData";

export default function Dashboard() {
  const [hoveredDay, setHoveredDay] = useState(null);
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="LIVE INTELLIGENCE">Analytics Dashboard</SectionTitle>

      <GlassCard className="mb-8 overflow-auto">
        <h3 className="text-xl font-semibold mb-6">GitHub Contributions (Last Year)</h3>
        <div className="flex gap-[2px] flex-wrap">
          {gitHubContributions.map((d, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredDay(i)}
              onMouseLeave={() => setHoveredDay(null)}
              className="w-3 h-3 rounded-sm transition-colors duration-150"
              style={{ backgroundColor: d.count === 0 ? '#1e293b' : `rgba(59, 130, 246, ${d.count * 0.15})` }}
            />
          ))}
        </div>
        {hoveredDay !== null && (
          <p className="mt-2 text-sm text-gray-400">
            Day {hoveredDay + 1}: {gitHubContributions[hoveredDay].count} contributions
          </p>
        )}
      </GlassCard>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {repoStats.map((stat) => (
          <GlassCard key={stat.label} className="text-center p-6">
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-4xl font-bold mt-2">{stat.value}</p>
            <span className="text-green-400 text-sm">{stat.change}</span>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <h3 className="text-xl font-semibold mb-6">Learning Progress Tracker</h3>
        <div className="space-y-6">
          {learningProgress.map((item) => (
            <div key={item.skill}>
              <div className="flex justify-between text-sm mb-2">
                <span>{item.skill}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-brand rounded-full transition-all duration-1000"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
