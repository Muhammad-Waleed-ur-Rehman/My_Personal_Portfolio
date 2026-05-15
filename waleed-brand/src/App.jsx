import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyChatButton from "./components/StickyChatButton";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AdvancedFeatures from "./components/AdvancedFeatures";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/advanced" element={<AdvancedFeatures />} />
        </Routes>
      </main>
      <Footer />
      <StickyChatButton />
    </div>
  );
}
