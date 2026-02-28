import type { Post } from "@/lib/blog";

export default function BlogHeader({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header style={{ marginBottom: "3rem" }}>
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
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 400,
          color: "var(--text-primary)",
          lineHeight: 1.1,
          marginTop: "14px",
          marginBottom: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        {post.title}
      </h1>

      {/* Meta line */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          fontWeight: 300,
          color: "var(--text-tertiary)",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span>{formattedDate}</span>
        <span>&middot;</span>
        <span>{post.reading_time}</span>
        <span>&middot;</span>
        <span>{post.word_count.toLocaleString()} words</span>
      </div>
    </header>
  );
}
