import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — The Varied",
  description:
    "Thoughts on production, creative process, and the work behind the work.",
  alternates: {
    canonical: "https://thevaried.co/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main
      style={{
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "0 var(--page-margin) 5rem",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        {/* Orange accent line */}
        <div
          style={{
            width: "2.5rem",
            height: "3px",
            background: "var(--accent-orange)",
            marginBottom: "1.5rem",
          }}
        />

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Blog
        </h1>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            fontWeight: 300,
            color: "var(--text-tertiary)",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Notes on production, process, and the things we think about between
          projects.
        </p>
      </div>

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            fontWeight: 300,
            color: "var(--text-muted)",
          }}
        >
          Nothing here yet. Check back soon.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
