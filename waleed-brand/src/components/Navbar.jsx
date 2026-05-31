import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/92 backdrop-blur-xl border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex justify-between items-center py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-dark-accent font-syne tracking-tight"
        >
          MWR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            Contact
          </button>
          <Link
            to="/advanced"
            className="text-sm text-dark-text-secondary hover:text-dark-accent transition-colors duration-200"
          >
            Advanced
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:block btn-primary text-xs"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-surface border-t border-white/6">
          <div className="container-wide py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              Contact
            </button>
            <Link
              to="/advanced"
              className="text-sm text-dark-text-secondary hover:text-dark-accent"
            >
              Advanced
            </Link>
            <a href="#" className="btn-primary text-xs w-full text-center">
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
