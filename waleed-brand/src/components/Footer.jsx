export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-12 bg-dark-bg">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left: About */}
          <div>
            <p className="text-dark-accent font-bold text-lg mb-2">MWR</p>
            <p className="text-dark-text-secondary text-sm">
              Building AI and blockchain solutions at the intersection of finance, audit, and Web3.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex justify-end gap-12">
            <div>
              <p className="text-dark-text text-xs uppercase tracking-wider font-semibold mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-sm text-dark-text-secondary">
                <li><a href="#about" className="hover:text-dark-accent transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-dark-accent transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-dark-accent transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <p className="text-dark-text text-xs uppercase tracking-wider font-semibold mb-3">
                Connect
              </p>
              <ul className="space-y-2 text-sm text-dark-text-secondary">
                <li><a href="#contact" className="hover:text-dark-accent transition-colors">Contact</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-accent transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-accent transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-dark-text-secondary">
          <p>© {new Date().getFullYear()} Muhammad Waleed Ur Rehman. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Building the future of audit, AI, and Web3.
          </p>
        </div>
      </div>
    </footer>
  );
}
