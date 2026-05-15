import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Dashboard from "../sections/Dashboard";
import AdvancedDashboard from "../sections/AdvancedDashboard";
import Blog from "../sections/Blog";
import Chatbot from "../sections/Chatbot";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="dashboard"><Dashboard /></div>
      <div id="advanced-dashboard"><AdvancedDashboard /></div>
      <div id="blog"><Blog /></div>
      <div id="chatbot"><Chatbot /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
