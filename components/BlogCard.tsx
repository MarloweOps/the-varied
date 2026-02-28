import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      {/* Category */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--accent-orange)",
        }}
      >
        {post.category}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.375rem",
          fontWeight: 400,
          color: "var(--text-primary)",
          marginTop: "10px",
          marginBottom: "10px",
          lineHeight: 1.25,
        }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          marginBottom: "16px",
        }}
      >
        {post.meta_description}
      </p>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          fontWeight: 300,
          color: "var(--text-tertiary)",
        }}
      >
        <span>{formattedDate}</span>
        <span>&middot;</span>
        <span>{post.reading_time}</span>
      </div>
    </Link>
  );
}
