import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "marlowe";

function checkAuth(req: NextRequest) {
  const auth = req.headers.get("x-admin-password");
  return auth === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!fs.existsSync(POSTS_DIR)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const { data, content } = matter(raw);
    const words = content.trim().split(/\s+/).length;
    return {
      slug: data.slug || f.replace(/\.md$/, ""),
      title: data.title || "Untitled",
      date: data.date || "",
      status: data.status || "draft",
      word_count: data.word_count || words,
      filename: f,
    };
  });

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];
  const slug = `new-post-${Date.now()}`;
  const filename = `${slug}.md`;

  const frontmatter = {
    title: "New Post",
    meta_description: "",
    slug,
    keyword: "",
    secondary_keywords: [],
    date: dateStr,
    category: "General",
    status: "draft",
    word_count: 0,
    reading_time: "1 min",
    author: "Brendan Lynch",
    author_title: "Founder & EP, The Varied",
  };

  const content = matter.stringify("\n\nStart writing here...\n", frontmatter);
  fs.writeFileSync(path.join(POSTS_DIR, filename), content);

  return NextResponse.json({ slug, filename });
}
