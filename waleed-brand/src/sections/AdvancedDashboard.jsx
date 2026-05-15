import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

export default function AdvancedDashboard() {
  const [activeTabs, setActiveTabs] = useState({
    finance: "live",
    audit: "realtime",
    blockchain: "nodes",
  });
  const [nodePositions, setNodePositions] = useState([]);
  const [aiScore, setAiScore] = useState(0);

  // Generate blockchain network nodes
  useEffect(() => {
    const positions = Array(12)
      .fill(0)
      .map(() => ({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      }));
    setNodePositions(positions);

    // Animate AI score
    const interval = setInterval(() => {
      setAiScore((prev) => (prev + Math.random() * 5) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animated candlestick data
  const candleData = [
    { open: 100, close: 120, high: 125, low: 95 },
    { open: 120, close: 110, high: 135, low: 108 },
    { open: 110, close: 130, high: 132, low: 105 },
    { open: 130, close: 125, high: 140, low: 120 },
    { open: 125, close: 135, high: 138, low: 122 },
  ];

  // KPI cards data
  const kpis = [
    { label: "Real-Time Audits", value: "1,234", color: "from-cyan-500 to-blue-500" },
    { label: "Smart Contracts Verified", value: "89", color: "from-violet-500 to-purple-500" },
    { label: "Risk Score", value: "7.2%", color: "from-amber-500 to-orange-500" },
    { label: "Blockchain TPS", value: "45K", color: "from-emerald-500 to-green-500" },
  ];

  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <SectionTitle subtitle="NEXT-GEN COMMAND CENTER">Advanced Dashboard</SectionTitle>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glowing border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${kpi.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 group-hover:border-white/30 rounded-2xl p-6 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-sm font-medium text-gray-300">{kpi.label}</p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${kpi.color}`}
                  ></motion.div>
                </div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                  {kpi.value}
                </h3>
                <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                    className={`h-full bg-gradient-to-r ${kpi.color}`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Candlestick Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Live Candlestick Chart
              </h3>
              <div className="flex items-end justify-around h-48 gap-4">
                {candleData.map((candle, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative w-full flex flex-col items-center"
                  >
                    {/* High-Low line */}
                    <div className="w-1 bg-gradient-to-b from-cyan-500 to-transparent opacity-60" style={{ height: `${(candle.high - candle.low) * 1.5}px` }}></div>
                    {/* Candlestick */}
                    <div
                      className={`w-8 ${candle.close > candle.open ? "bg-emerald-500" : "bg-red-500"} rounded border border-white/30`}
                      style={{ height: `${Math.abs(candle.close - candle.open) * 1.5}px` }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Risk Score Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-amber-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center h-full">
              <h3 className="text-lg font-semibold mb-6">AI Risk Analyzer</h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative w-32 h-32 mb-6"
              >
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <defs>
                    <radialGradient id="orbGradient">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    </radialGradient>
                  </defs>
                  <circle cx="60" cy="60" r="50" fill="url(#orbGradient)" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                      {Math.round(aiScore)}%
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Risk Level</p>
                  </motion.div>
                </div>
              </motion.div>
              <p className="text-sm text-gray-400 text-center">Neural Network Processing</p>
            </div>
          </motion.div>
        </div>

        {/* Blockchain Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative mb-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Blockchain Network Ecosystem
            </h3>
            <svg className="w-full h-96 bg-gradient-to-b from-slate-900/20 to-slate-800/20 rounded-xl overflow-hidden" viewBox="0 0 1000 400">
              {/* Data streams between nodes */}
              {nodePositions.map((node1, i1) =>
                nodePositions.slice(i1 + 1, i1 + 3).map((node2, i2) => (
                  <motion.line
                    key={`stream-${i1}-${i2}`}
                    x1={`${node1.x}%`}
                    y1={`${node1.y}%`}
                    x2={`${node2.x}%`}
                    y2={`${node2.y}%`}
                    stroke="url(#streamGradient)"
                    strokeWidth="1"
                    opacity="0.4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i1 * 0.1 }}
                  />
                ))
              )}
              <defs>
                <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>

              {/* Nodes */}
              {nodePositions.map((pos, i) => (
                <g key={`node-${i}`}>
                  <motion.circle
                    cx={`${pos.x}%`}
                    cy={`${pos.y}%`}
                    r="12"
                    fill="#06b6d4"
                    opacity="0.8"
                    animate={{ r: [12, 16, 12] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  <motion.circle
                    cx={`${pos.x}%`}
                    cy={`${pos.y}%`}
                    r="20"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="1"
                    opacity="0.4"
                    animate={{ r: [20, 28, 20] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                </g>
              ))}
            </svg>
            <p className="text-xs text-gray-400 mt-4">
              {nodePositions.length} Active Nodes • Distributed Ledger • Smart Contract Layer
            </p>
          </div>
        </motion.div>

        {/* Audit Logs & AI Agents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Audit Logs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Real-Time Audit Logs
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {[
                  { event: "Smart Contract Scan", status: "✓", time: "2s ago" },
                  { event: "Blockchain Verification", status: "✓", time: "5s ago" },
                  { event: "Risk Assessment", status: "○", time: "8s ago" },
                  { event: "Data Validation", status: "✓", time: "12s ago" },
                  { event: "Anomaly Detection", status: "○", time: "15s ago" },
                  { event: "Report Generation", status: "✓", time: "18s ago" },
                ].map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between text-sm p-2 rounded border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <span className="text-gray-300">{log.event}</span>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs ${log.status === "✓" ? "text-emerald-400" : "text-yellow-400"}`}
                      >
                        {log.status}
                      </span>
                      <span className="text-xs text-gray-500">{log.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Agents Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                Active AI Agents
              </h3>
              <div className="space-y-4">
                {[
                  { agent: "Data Validator", status: "active", uptime: "99.8%" },
                  { agent: "Transaction Monitor", status: "active", uptime: "99.9%" },
                  { agent: "Anomaly Detector", status: "idle", uptime: "98.5%" },
                  { agent: "Smart Contract Auditor", status: "active", uptime: "99.7%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-3 h-3 rounded-full ${item.status === "active" ? "bg-emerald-400" : "bg-gray-500"}`}
                      ></motion.div>
                      <span className="text-sm font-medium">{item.agent}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.uptime}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            🤖 Futuristic fintech command center powered by AI & blockchain | Distributed Ledger | Smart Contracts
          </p>
        </div>
      </div>
    </section>
  );
}
