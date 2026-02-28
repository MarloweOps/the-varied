import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import BlogHeader from "@/components/BlogHeader";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — The Varied`,
    description: post.meta_description,
    keywords: [post.keyword, ...post.secondary_keywords],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.date,
      tags: [post.category, post.keyword],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "The Varied",
      url: "https://thevaried.co",
    },
    publisher: {
      "@type": "Organization",
      name: "The Varied",
      url: "https://thevaried.co",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thevaried.co/blog/${post.slug}`,
    },
    keywords: [post.keyword, ...post.secondary_keywords].join(", "),
    wordCount: post.word_count,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 var(--page-margin) 5rem",
        }}
      >
        {/* Back link */}
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--text-muted)",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2.5rem",
            letterSpacing: "0.02em",
          }}
        >
          &larr; Back
        </Link>

        <BlogHeader post={post} />

        {/* Article body */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        />

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              fontWeight: 300,
              color: "var(--text-tertiary)",
              marginBottom: "12px",
            }}
          >
            Have a project in mind?
          </p>
          <a
            href="mailto:hello@thevaried.co"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              fontWeight: 400,
              color: "var(--accent-orange)",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Get in touch.
          </a>
        </div>
      </main>
    </>
  );
}
