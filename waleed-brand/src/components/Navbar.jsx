import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b border-white/5 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold gradient-text">MWR</Link>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/#about" className="text-gray-400 hover:text-white transition">About</a>
          <a href="/#experience" className="text-gray-400 hover:text-white transition">Experience</a>
          <a href="/#skills" className="text-gray-400 hover:text-white transition">Skills</a>
          <a href="/#projects" className="text-gray-400 hover:text-white transition">Projects</a>
          <a href="/#dashboard" className="text-gray-400 hover:text-white transition">Dashboard</a>
          <a href="/#blog" className="text-gray-400 hover:text-white transition">Blog</a>
          <Link to="/blog" className="text-gray-400 hover:text-white transition">Articles</Link>
          <Link to="/advanced" className="text-gray-400 hover:text-white transition">Advanced</Link>
        </div>
        <a href="#contact" className="text-sm bg-gradient-brand px-5 py-2 rounded-lg font-medium">Hire Me</a>
      </div>
    </motion.nav>
  );
}
