import { useEffect } from "react";
import config from "../config";

export default function GiscusComments() {
  useEffect(() => {
    // Load Giscus script dynamically
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Set attributes from config
    script.setAttribute("data-repo", config.giscus.repo);
    script.setAttribute("data-repo-id", config.giscus.repoId);
    script.setAttribute("data-category", config.giscus.category);
    script.setAttribute("data-category-id", config.giscus.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");

    const commentsDiv = document.getElementById("giscus-comments");
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }
  }, []);

  // Validate Giscus config
  if (!config.giscus.repo || !config.giscus.repoId) {
    return (
      <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
        <p className="text-gray-400">
          💬 Comments section not configured. Please set GISCUS environment variables in .env.local
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>
      <div id="giscus-comments" className="giscus" />
    </div>
  );
}
