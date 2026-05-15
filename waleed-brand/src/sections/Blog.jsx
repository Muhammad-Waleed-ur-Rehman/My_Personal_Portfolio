import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import SectionTitle from "../components/ui/SectionTitle";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle subtitle="THOUGHTS">Latest Articles</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <GlassCard className="h-full hover:border-blue-400/30 transition-all duration-300 group">
              <span className="text-xs uppercase tracking-wider text-blue-400">{post.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:gradient-text">{post.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
              <div className="mt-5 flex justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/blog" className="text-blue-400 hover:underline">View all articles →</Link>
      </div>
    </section>
  );
}
