import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useSound } from "use-sound";
import { useIdle, useScroll, useWindowSize } from "react-use";
import { ethers } from "ethers";
import config from "../config";

// ====================== SECTION COMPONENTS ======================

// 1. Case Studies / Whitepaper Vault (Formspree)
const CaseStudiesVault = () => {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(config.formspree.endpoint, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      setDownloaded(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const papers = [
    { title: "AI Audit Automation Whitepaper", file: "#" },
    { title: "DeFi Risk Framework", file: "#" },
    { title: "Smart Contract Auditing Guide", file: "#" },
  ];

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">📄 Whitepaper Vault</h2>
      {!downloaded ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to download"
            className="bg-white/10 border border-white/10 rounded-xl px-4 py-2 flex-1"
          />
          <button type="submit" className="bg-gradient-brand px-6 py-2 rounded-xl">Get Access</button>
        </form>
      ) : (
        <div className="space-y-4">
          {papers.map((p) => (
            <a key={p.title} href={p.file} download className="block text-blue-400 hover:underline">⬇ {p.title}</a>
          ))}
        </div>
      )}
    </motion.section>
  );
};

// 2. Speaking / Podcast Section
const MediaSection = () => {
  const talks = [
    { title: "AI in Audit - Keynote", embed: config.embeds.youtubeAiAudit },
    { title: "Emerging Technologies Discussion", embed: config.embeds.youtubeWeb3 },
  ];
  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">🎙️ Speaking & Podcasts</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {talks.map((t) => (
          <div key={t.title} className="rounded-xl overflow-hidden bg-white/5">
            {t.embed ? (
              <iframe
                src={t.embed}
                className="w-full aspect-video rounded-xl"
                title={t.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <p className="text-gray-400">{t.title} - Video embed placeholder</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};


// 3. Interactive Timeline
const Timeline = () => {
  const events = [
    { year: "2020", title: "Deloitte Pakistan ", desc: "Started career in Audit & Assurance with focus on IFRS, ISA & financial reporting" },
    { year: "2023", title: "Baker Tilly Dubai", desc: "Led audit engagements across service, trading & medium-sized entities in the UAE" },
    { year: "2024", title: "AI Awakening", desc: "Began Python, Data Science & Machine Learning journey for finance automation" },
    { year: "2025", title: "First Gen AI Dive", desc: "Built AI-powered audit automation tools for sampling & workflow efficiency" },
    { year: "2025", title: "AI Agent & Web3 Dive", desc: "Started Solidity & smart contract development with focus on finance use cases" },
    { year: "2026", title: "AI Lead Engineer", desc: "Building AI-native solutions at the intersection of Audit, Finance, AI & Web3" },
  ];
  return (
    <motion.section className="glass p-8 my-12 overflow-x-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-8">⏳ The Journey</h2>
      <div className="flex gap-6 min-w-max pb-4">
        {events.map((ev, i) => (
          <div key={i} className="relative flex flex-col items-center min-w-[160px]">
            <div className="w-4 h-4 bg-blue-500 rounded-full mb-2" />
            <div className="text-sm text-blue-300">{ev.year}</div>
            <h4 className="font-bold mt-1 text-center">{ev.title}</h4>
            <p className="text-xs text-gray-400 text-center max-w-[160px]">{ev.desc}</p>
            {i < events.length - 1 && <div className="absolute top-2 left-full w-12 h-px bg-white/20" />}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

// 4. Live Code Sandboxes
const CodeSandbox = () => (
  <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold gradient-text mb-6">💻 Live Code Demos</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Solidity Contract</h3>
          <a
            href="https://remix.ethereum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg"
          >
            Open in new tab ↗
          </a>
        </div>
        <iframe
          src="https://remix.ethereum.org/"
          className="w-full h-96 rounded-xl border border-white/10"
          title="Remix IDE"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">AI Notebook</h3>
          {config.embeds.colabNotebook && (
            <a
              href={config.embeds.colabNotebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg"
            >
              Open in new tab ↗
            </a>
          )}
        </div>
        {config.embeds.colabNotebook ? (
          <a
            href={config.embeds.colabNotebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-96 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex flex-col items-center justify-center hover:from-blue-500/20 hover:to-purple-500/20 transition-colors cursor-pointer group"
          >
            <div className="text-5xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-2">Google Colab Notebook</h4>
            <p className="text-gray-400 text-sm mb-4 text-center px-4">Interactive Python notebook with AI/ML examples</p>
            <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
              <span className="font-semibold">Launch Notebook</span>
              <span>→</span>
            </div>
          </a>
        ) : (
          <div className="w-full h-96 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
            <p className="text-gray-400">Colab Notebook - Configure in .env.local</p>
          </div>
        )}
      </div>
    </div>
  </motion.section>
);

// 5. Live GitHub Stats
const GitHubStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const headers = config.github.apiToken
          ? { Authorization: `token ${config.github.apiToken}` }
          : {};
        const response = await fetch(
          `https://api.github.com/users/${config.github.username}`,
          { headers }
        );
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        setStats(null);
      }
    };
    fetchGitHubStats();
  }, []);

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">🐙 Live GitHub Stats</h2>
      {stats ? (
        <div className="grid grid-cols-3 gap-4 text-center">
          <div><span className="text-3xl font-bold">{stats.public_repos}</span><br />Repos</div>
          <div><span className="text-3xl font-bold">{stats.followers}</span><br />Followers</div>
          <div><span className="text-3xl font-bold">{stats.public_gists}</span><br />Gists</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </motion.section>
  );
};

// 6. AI-Driven Resume Customizer
const ResumeCustomizer = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "Your Name",
    email: "your.email@example.com",
    phone: "+1 (XXX) XXX-XXXX",
    linkedIn: "linkedin.com/in/yourprofile",
    industry: "",
    role: "",
    yearsExp: "",
    topSkills: [],
    achievements: "",
  });

  const industries = [
    { label: "Finance & Audit (Big4)", value: "big4_audit", keywords: ["IFRS", "ISA", "Financial Reporting", "Compliance", "Risk Assessment", "Audit Planning"] },
    { label: "AI in Finance", value: "ai_finance", keywords: ["Machine Learning", "Python", "Data Analysis", "NLP", "Predictive Models", "Automation"] },
    { label: "Web3 & Blockchain", value: "web3", keywords: ["Solidity", "Smart Contracts", "Blockchain", "DeFi", "Web3", "Crypto"] },
    { label: "AI in Audit", value: "ai_audit", keywords: ["Audit Automation", "AI/ML", "Data Mining", "RPA", "Process Automation", "Testing"] },
  ];

  const roles = {
    big4_audit: ["Senior Auditor", "Manager", "Senior Manager", "Director"],
    ai_finance: ["Data Scientist", "ML Engineer", "AI Consultant", "Financial Analyst"],
    web3: ["Smart Contract Dev", "Blockchain Dev", "Web3 Engineer", "Security Auditor"],
    ai_audit: ["Audit Technician", "Audit Senior", "Audit Manager", "Automation Specialist"],
  };

  const steps_list = [
    { label: "Industry", field: "industry" },
    { label: "Role & Experience", field: "role" },
    { label: "Skills", field: "topSkills" },
    { label: "Contact Info", field: "email" },
    { label: "Achievements", field: "achievements" },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      topSkills: prev.topSkills.includes(skill)
        ? prev.topSkills.filter(s => s !== skill)
        : [...prev.topSkills, skill]
    }));
  };

  const generatePDF = () => {
    if (!formData.industry || !formData.role || formData.topSkills.length === 0) {
      alert("Please complete all steps first!");
      return;
    }

    const industryData = industries.find(i => i.value === formData.industry);
    const resumeContent = `
${formData.fullName.toUpperCase()}
${formData.email} | ${formData.phone} | ${formData.linkedIn}

PROFESSIONAL SUMMARY
Results-driven professional with ${formData.yearsExp || "X"} years of experience in ${industryData.label}. 
Expertise in ${formData.topSkills.slice(0, 3).join(", ")}. 
Proven track record of delivering high-impact solutions and driving organizational success.

CORE COMPETENCIES
${formData.topSkills.join(" • ")}

PROFESSIONAL EXPERIENCE
${formData.role} | Current Organization
${formData.achievements || "• Led critical initiatives with measurable impact\n• Optimized processes and improved efficiency\n• Collaborated with cross-functional teams"}

TECHNICAL SKILLS
${industryData.keywords.join(", ")}

EDUCATION
Bachelor's Degree | Relevant Field

CERTIFICATIONS
Industry-relevant certifications and credentials

---
ATS-OPTIMIZED FOR: ${industryData.label}
Generated: ${new Date().toLocaleDateString()}
`;

    // Create a simple text file download (for now)
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent));
    element.setAttribute("download", `Resume-${formData.role.replace(/ /g, "-")}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    alert("Resume downloaded! Replace placeholders with your actual details.");
  };

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-2">🤖 Resume Tailor</h2>
      <p className="text-gray-400 mb-6 text-sm">Build an ATS-friendly resume optimized for your industry</p>

      {/* Progress Bar */}
      <div className="w-full bg-white/5 rounded-full h-2 mb-6">
        <div className="bg-gradient-brand h-2 rounded-full transition-all" style={{ width: `${((step + 1) / steps_list.length) * 100}%` }}></div>
      </div>

      {/* Step Content */}
      <div className="mb-6">
        {/* Step 1: Industry */}
        {step === 0 && (
          <div>
            <p className="text-lg font-semibold mb-4">Select Your Industry</p>
            <div className="grid md:grid-cols-2 gap-3">
              {industries.map(ind => (
                <button
                  key={ind.value}
                  onClick={() => {
                    handleInputChange("industry", ind.value);
                    handleInputChange("topSkills", []);
                  }}
                  className={`p-4 rounded-xl text-left transition ${formData.industry === ind.value ? "bg-blue-500 border-blue-400" : "bg-white/10 border-white/10 hover:bg-white/15"} border`}
                >
                  <p className="font-semibold">{ind.label}</p>
                  <p className="text-xs text-gray-300 mt-1">{ind.keywords.slice(0, 3).join(", ")}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Role & Experience */}
        {step === 1 && formData.industry && (
          <div>
            <p className="text-lg font-semibold mb-4">Select Your Role & Experience</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Professional Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
                >
                  <option value="">Select role...</option>
                  {roles[formData.industry]?.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Years of Experience</label>
                <select
                  value={formData.yearsExp}
                  onChange={(e) => handleInputChange("yearsExp", e.target.value)}
                  className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
                >
                  <option value="">Select...</option>
                  <option value="0-2">0-2 years (Entry Level)</option>
                  <option value="2-5">2-5 years (Mid-Level)</option>
                  <option value="5-10">5-10 years (Senior)</option>
                  <option value="10+">10+ years (Executive)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Skills */}
        {step === 2 && formData.industry && (
          <div>
            <p className="text-lg font-semibold mb-4">Select Your Top Skills (Pick 5-8)</p>
            <div className="flex flex-wrap gap-2">
              {industries.find(i => i.value === formData.industry)?.keywords.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-4 py-2 rounded-full text-sm transition ${formData.topSkills.includes(skill) ? "bg-blue-500 border-blue-400" : "bg-white/10 border-white/10 hover:bg-white/15"} border`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">{formData.topSkills.length} selected</p>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 3 && (
          <div>
            <p className="text-lg font-semibold mb-4">Contact Information</p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={formData.linkedIn}
                onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl p-2"
              />
            </div>
          </div>
        )}

        {/* Step 5: Achievements */}
        {step === 4 && (
          <div>
            <p className="text-lg font-semibold mb-4">Key Achievements</p>
            <textarea
              placeholder="E.g., Led $5M audit engagement | Implemented RPA reducing manual work by 40% | Developed ML model achieving 95% accuracy"
              value={formData.achievements}
              onChange={(e) => handleInputChange("achievements", e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl p-3 h-24"
            />
            <p className="text-xs text-gray-400 mt-2">Use quantifiable metrics and action verbs</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 justify-between">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-6 py-2 bg-white/10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/15"
        >
          ← Back
        </button>
        <div className="text-sm text-gray-400">
          Step {step + 1} of {steps_list.length}
        </div>
        {step < steps_list.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!formData[steps_list[step].field]}
            className="px-6 py-2 bg-gradient-brand rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={generatePDF}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-xl font-semibold"
          >
            📥 Download Resume
          </button>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-sm text-blue-200">
        <p>✨ Your resume will be ATS-optimized for: <span className="font-semibold">{industries.find(i => i.value === formData.industry)?.label || "Select industry"}</span></p>
        <p className="mt-2 text-xs">ATS systems scan for keywords, proper formatting, and specific sections. This tool ensures your resume passes through automated screening.</p>
      </div>
    </motion.section>
  );
};

// 7. Interactive Decision Tree
const DecisionTree = () => {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: "audit", label: "📋 Audit Advisory", icon: "🔍", desc: "Financial, compliance & internal audit services" },
    { id: "ai", label: "🤖 AI Solutions", icon: "⚙️", desc: "Machine learning & automation for business" },
    { id: "web3", label: "⛓️ Web3 Services", icon: "🔗", desc: "Blockchain & smart contract solutions" },
  ];

  const serviceLayers = {
    audit: [
      { q: "What type of audit?", options: ["Internal Audit", "External Audit", "Compliance Audit"] },
      { q: "Industry focus?", options: ["Finance", "Tech", "Healthcare", "Other"] },
    ],
    ai: [
      { q: "AI application?", options: ["Audit Automation", "Finance Automation", "Data Analysis"] },
      { q: "Key challenge?", options: ["Risk Detection", "Process Mining", "Predictive Analytics"] },
    ],
    web3: [
      { q: "Web3 focus?", options: ["Smart Contracts", "DeFi Security", "Blockchain Audit"] },
      { q: "Blockchain preference?", options: ["Ethereum", "Polygon", "Other Chains"] },
    ],
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setStep(1);
  };

  const handleOptionSelect = () => {
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setStep(0);
    setSelectedService(null);
  };

  const currentLayers = selectedService ? serviceLayers[selectedService] : [];
  const isComplete = selectedService && step > currentLayers.length;

  const getServiceTitle = () => {
    const service = services.find(s => s.id === selectedService);
    return service?.label || "";
  };

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">🔍 Find Your Service</h2>

      {/* Step 0: Service Selection */}
      {step === 0 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition text-left group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300">{service.label}</h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
            </button>
          ))}
        </div>
      ) : isComplete ? (
        /* Final Recommendation */
        <div className="text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-6">
            <p className="text-lg text-gray-300 mb-4">Based on your needs:</p>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-6">
              <p className="text-3xl font-bold gradient-text mb-3">{getServiceTitle()}</p>
              <p className="text-gray-300 mb-6">Let's build a custom solution tailored to your specific requirements.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href={config.social.calendly} target="_blank" rel="noopener noreferrer" className="bg-gradient-brand px-8 py-3 rounded-xl font-semibold hover:opacity-90">
                  📅 Book Strategy Call
                </a>
                <button onClick={reset} className="bg-white/10 px-8 py-3 rounded-xl hover:bg-white/20 transition">
                  🔄 Explore Other Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Service-Specific Layers */
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mb-6">
            <button
              onClick={() => {
                setStep(0);
                setSelectedService(null);
              }}
              className="text-sm text-blue-400 hover:text-blue-300 mb-4 transition"
            >
              ← Back to Services
            </button>
            <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-sm font-semibold text-blue-300">{getServiceTitle()}</p>
            </div>
            <p className="text-lg font-semibold mb-4">{currentLayers[step - 1]?.q}</p>
            <div className="flex gap-3 flex-wrap">
              {currentLayers[step - 1]?.options.map(option => (
                <button
                  key={option}
                  onClick={handleOptionSelect}
                  className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/30 transition font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Layer {step} of {currentLayers.length + 1}</span>
            <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-brand"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / (currentLayers.length + 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

// 8. Multi-Step Hire Form
const HireForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const steps = [
    { field: "challenge", label: "Biggest finance/AI challenge?", type: "text" },
    { field: "budget", label: "Budget range?", type: "select", options: ["<$5k", "$5-15k", "$15k+"] },
    { field: "timeline", label: "Timeline?", type: "select", options: ["ASAP", "1 month", "3 months"] },
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => setStep(s => s + 1);

  const submit = async () => {
    try {
      await fetch(config.formspree.endpoint, {
        method: "POST",
        body: JSON.stringify({ ...formData, email: config.social.email }),
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = config.social.calendly;
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">💼 Let's Work Together</h2>
      {step < steps.length ? (
        <>
          <label className="block mb-2">{steps[step].label}</label>
          {steps[step].type === "select" ? (
            <select name={steps[step].field} onChange={handleChange} className="bg-white/10 border border-white/10 rounded-xl p-2 w-full mb-4">
              {steps[step].options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <input name={steps[step].field} onChange={handleChange} className="w-full bg-white/10 border border-white/10 rounded-xl p-2 mb-4" />
          )}
          <button onClick={nextStep} className="bg-gradient-brand px-6 py-2 rounded-xl">Next</button>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4">Perfect! Let's schedule a call.</p>
          <button onClick={submit} className="bg-gradient-brand px-8 py-3 rounded-xl">Book Now</button>
        </div>
      )}
    </motion.section>
  );
};

// 9. Dynamic CTA Banner
const DynamicCTABanner = () => {
  const { y } = useScroll(window);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(y > 800);
  }, [y]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-0 right-0 z-40 bg-blue-600/90 backdrop-blur-md py-3 px-6 text-center text-white"
        >
          Need a speaker for your Web3 conference?{" "}
          <a href="#contact" className="underline font-bold">Let's talk</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 10. Exit-Intent Popup
const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const idle = useIdle(5000);
  useEffect(() => {
    if (idle) setShow(true);
  }, [idle]);

  const close = () => setShow(false);
  const submitEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      await fetch(config.formspree.endpoint, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      close();
    } catch (error) {
      console.error("Email submission error:", error);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={close}
        >
          <div className="glass p-8 max-w-md text-center" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">Wait! Free "AI in Audit" Cheatsheet</h3>
            <form onSubmit={submitEmail}>
              <input name="email" type="email" placeholder="Your email" required className="w-full bg-white/10 border border-white/10 rounded-xl p-2 mb-4" />
              <button type="submit" className="bg-gradient-brand px-6 py-2 rounded-xl">Send It</button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 11. Web3 Connect / Wallet Integration
const Web3Connect = () => {
  const [account, setAccount] = useState(null);
  const [ens, setEns] = useState("waleed.eth");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        try {
          const name = await provider.lookupAddress(address);
          if (name) setEns(name);
        } catch {}
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    }
  };

  return (
    <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 className="text-3xl font-bold gradient-text mb-6">🔗 Web3 Identity</h2>
      <p className="mb-2">ENS: <span className="text-blue-400">{ens}</span></p>
      {account ? (
        <p className="text-sm text-gray-400">Connected: {account.slice(0,6)}...{account.slice(-4)}</p>
      ) : (
        <button onClick={connectWallet} className="bg-gradient-brand px-6 py-2 rounded-xl">Connect Wallet</button>
      )}
    </motion.section>
  );
};

// 12. On-Chain Resume
const OnChainResume = () => (
  <motion.section className="glass p-8 my-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold gradient-text mb-6">🪪 Verifiable Credentials</h2>
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">GP</div>
        <a href="https://passport.gitcoin.co" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View my on-chain stamps</a>
      </div>
      {config.etherscan.contractAddress && (
        <a 
          href={`https://etherscan.io/address/${config.etherscan.contractAddress}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline"
        >
          📜 View Smart Contract on Etherscan
        </a>
      )}
    </div>
  </motion.section>
);

// 13. Advanced Chatbot
const AdvancedChatbot = () => {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! I know everything about Muhammad Waleed. Ask me anything." }]);
  const [input, setInput] = useState("");

  const answer = (q) => {
    const lower = q.toLowerCase();
    if (lower.includes("skill")) return "Skills: IFRS, Python, Solidity, NLP, Power BI.";
    if (lower.includes("experience")) return "Deloitte, Baker Tilly, Yousuf Adil, AccouConsult.";
    if (lower.includes("contact")) return `Email: ${config.social.email} | LinkedIn: ${config.social.linkedin}`;
    return "Based on his CV, he can help with audit automation, AI, and smart contracts.";
  };

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: "user", text: input }]);
    setTimeout(() => setMessages(prev => [...prev, { from: "bot", text: answer(input) }]), 500);
    setInput("");
  };

  return (
    <div className="glass p-4 h-96 flex flex-col my-12">
      <div className="flex-1 overflow-auto mb-4 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`p-2 rounded-xl max-w-[80%] ${m.from === "user" ? "bg-blue-600 ml-auto" : "bg-white/5"}`}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} className="flex-1 bg-white/10 border border-white/10 rounded-xl p-2" placeholder="Ask me anything..." />
        <button onClick={send} className="bg-gradient-brand px-4 rounded-xl">Send</button>
      </div>
    </div>
  );
};

// 14. Dark/Light Mode Toggle
const ThemeToggle = () => {
  const [dark, setDark] = useState(true);
  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("light");
  };
  return (
    <button onClick={toggle} className="fixed top-24 right-4 z-50 glass p-2 rounded-full">
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

// 15. Custom Cursor
const CustomCursor = () => {
  const { width } = useWindowSize();
  const cursorRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
  if (width < 768) return null;
  return <div ref={cursorRef} className="hidden md:block fixed w-4 h-4 border border-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />;
};

// 16. Personalized Greeting
const PersonalizedGreeting = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
      <h1 className="text-5xl font-bold"><span className="gradient-text">{greeting}, welcome</span></h1>
    </motion.div>
  );
};

// ====================== MAIN EXPORT ======================
export default function AdvancedFeatures() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Muhammad Waleed Ur Rehman – Advanced</title>
        <meta name="description" content="AI Engineer & Web3 Builder" />
      </Helmet>

      <ThemeToggle />
      <CustomCursor />

      <PersonalizedGreeting />

      <div className="max-w-7xl mx-auto px-6">
        <Timeline />
        <CodeSandbox />
        <GitHubStats />
        <ResumeCustomizer />
        <DecisionTree />
        <CaseStudiesVault />
        <MediaSection />
        <Web3Connect />
        <OnChainResume />
        <AdvancedChatbot />
        <HireForm />
      </div>

      <DynamicCTABanner />
      <ExitIntentPopup />
    </div>
  );
}
