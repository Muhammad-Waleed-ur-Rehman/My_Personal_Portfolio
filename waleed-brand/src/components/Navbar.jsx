import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900">MWR</Link>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition font-medium">Services</a>
          <a href="/#projects" className="text-gray-600 hover:text-gray-900 transition font-medium">Projects</a>
          <a href="/#blog" className="text-gray-600 hover:text-gray-900 transition font-medium">Blog</a>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition font-medium">Articles</Link>
        </div>
        <a href="#contact" className="text-sm bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Contact</a>
      </div>
    </motion.nav>
  );
}
