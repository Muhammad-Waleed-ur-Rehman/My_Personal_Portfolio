import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import GlassCard from "../components/ui/GlassCard";
import GiscusComments from "../components/GiscusComments";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="py-24 text-center text-gray-400">Post not found.</div>;
  }

  return (
    <div className="py-24 px-6 max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 mb-8 hover:underline">
        <FiArrowLeft /> Back to articles
      </Link>
      <GlassCard>
        <span className="text-xs uppercase tracking-wider text-blue-400">{post.category}</span>
        <h1 className="text-4xl font-bold mt-3 mb-4 gradient-text">{post.title}</h1>
        <div className="flex gap-6 text-sm text-gray-500 mb-8">
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </GlassCard>
      <GiscusComments />
    </div>
  );
}
