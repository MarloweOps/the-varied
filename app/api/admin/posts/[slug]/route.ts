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

function findFileBySlug(slug: string): string | null {
  if (!fs.existsSync(POSTS_DIR)) return null;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const { data } = matter(raw);
    const fileSlug = data.slug || f.replace(/\.md$/, "");
    if (fileSlug === slug) return f;
  }
  return null;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const filename = findFileBySlug(slug);
  if (!filename) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  return NextResponse.json({
    slug: data.slug || filename.replace(/\.md$/, ""),
    title: data.title || "Untitled",
    meta_description: data.meta_description || "",
    keyword: data.keyword || "",
    secondary_keywords: data.secondary_keywords || [],
    date: data.date || "",
    category: data.category || "General",
    status: data.status || "draft",
    word_count: data.word_count || 0,
    reading_time: data.reading_time || "",
    author: data.author || "Brendan Lynch",
    author_title: data.author_title || "Founder & EP, The Varied",
    content: content,
    filename,
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const filename = findFileBySlug(slug);
  if (!filename) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const body = await req.json();
  const { title, meta_description, keyword, secondary_keywords, date, category, status, author, author_title, content } = body;

  const words = (content || "").trim().split(/\s+/).length;
  const readMin = Math.max(1, Math.ceil(words / 250));

  const frontmatter: Record<string, unknown> = {
    title: title || "Untitled",
    meta_description: meta_description || "",
    slug,
    keyword: keyword || "",
    secondary_keywords: secondary_keywords || [],
    date: date || new Date().toISOString().split("T")[0],
    category: category || "General",
    status: status || "draft",
    word_count: words,
    reading_time: `${readMin} min`,
    author: author || "Brendan Lynch",
    author_title: author_title || "Founder & EP, The Varied",
  };

  const newSlug = body.newSlug;
  if (newSlug && newSlug !== slug) {
    frontmatter.slug = newSlug;
  }

  const fileContent = matter.stringify("\n" + (content || "") + "\n", frontmatter);
  fs.writeFileSync(path.join(POSTS_DIR, filename), fileContent);

  return NextResponse.json({ success: true, word_count: words });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const filename = findFileBySlug(slug);
  if (!filename) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  fs.unlinkSync(path.join(POSTS_DIR, filename));
  return NextResponse.json({ success: true });
}
