import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type Post = {
  slug: string;
  title: string;
  meta_description: string;
  keyword: string;
  secondary_keywords: string[];
  date: string;
  category: string;
  reading_time: string;
  word_count: number;
  content: string;
  html?: string;
};

export type PostMeta = Omit<Post, "content" | "html">;

function parsePost(filename: string): Post {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  const slug = data.slug || filename.replace(/\.md$/, "");

  return {
    slug,
    title: data.title || "Untitled",
    meta_description: data.meta_description || "",
    keyword: data.keyword || "",
    secondary_keywords: data.secondary_keywords || [],
    date: data.date || "",
    category: data.category || "General",
    reading_time: data.reading_time || stats.text,
    word_count: data.word_count || stats.words,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((f) => {
      const { content, html, ...meta } = parsePost(f);
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  for (const f of files) {
    const post = parsePost(f);
    if (post.slug === slug) {
      const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(post.content);

      post.html = String(result);
      return post;
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { slug } = parsePost(f);
      return slug;
    });
}
