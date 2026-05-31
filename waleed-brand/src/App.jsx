import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import AdvancedFeatures from "./components/AdvancedFeatures";
import AdvancedDashboard from "./sections/AdvancedDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/advanced" element={<AdvancedFeatures />} />
          <Route path="/dashboard" element={<AdvancedDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
