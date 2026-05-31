import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient with radial overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(193, 255, 20, 0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-wide z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div
            className={`eyebrow transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Welcome to my portfolio
          </div>

          {/* Main Headline */}
          <h1
            className={`text-display-lg md:text-display font-syne font-bold leading-tight transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Audit Professional <br />
            <span className="text-dark-accent">→ AI Engineer → Web3 Builder</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-dark-text-secondary max-w-2xl mx-auto font-dm-sans transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            CA Finalist with 5+ years in Big 4. Passionate about automation, audit innovation, and blockchain solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary"
            >
              View My Work
            </button>
            <a href="#contact" className="btn-ghost">
              Let's Connect
            </a>
          </div>

          {/* Stats Preview Row */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries</div>
            </div>
            <div>
              <div className="stat-number">Big 4</div>
              <div className="stat-label">Background</div>
            </div>
            <div>
              <div className="stat-number">2</div>
              <div className="stat-label">Regions</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`flex justify-center pt-12 transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <button
              onClick={scrollToProjects}
              className="animate-bounce text-dark-accent hover:text-white transition-colors"
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
