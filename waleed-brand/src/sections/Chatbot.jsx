import { useState, useRef, useEffect } from "react";
import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";
import { FiSend } from "react-icons/fi";
import config from "../config";

const createResponses = () => ({
  "who is muhammad waleed": "Muhammad Waleed Ur Rehman is an Auditor turned AI Engineer and Web3 Builder with 5+ years of Big4 experience.",
  "experience": "He has worked at Deloitte, Baker Tilly, Yousuf Adil, and now leads AI+audit integration at AccouConsult Dubai.",
  "skills": "Finance, AI (NLP, Agents), Blockchain (Solidity), Power BI, Python.",
  "contact": `Email: ${config.social.email} | LinkedIn: ${config.social.linkedin}`,
  "default": "I can tell you about Muhammad Waleed's background, skills, and contact info. Just ask!"
});

export default function Chatbot() {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! Ask me about Muhammad Waleed." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const responses = createResponses();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const query = input.toLowerCase();
      let reply = responses.default;
      for (const [key, value] of Object.entries(responses)) {
        if (query.includes(key)) { reply = value; break; }
      }
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <SectionTitle subtitle="ASK ME">AI Assistant</SectionTitle>
      <GlassCard className="h-[450px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-white/5 border border-white/10"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-gray-400 animate-pulse">Thinking...</div>}
          <div ref={bottomRef} />
        </div>
        <div className="p-4 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about Muhammad Waleed..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-blue-400 transition"
          />
          <button onClick={handleSend} className="p-2 bg-gradient-brand rounded-xl text-white">
            <FiSend />
          </button>
        </div>
      </GlassCard>
    </section>
  );
}
