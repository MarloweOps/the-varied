"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useParams } from "next/navigation";

type PostData = {
  slug: string;
  title: string;
  meta_description: string;
  keyword: string;
  date: string;
  category: string;
  status: string;
  author: string;
  author_title: string;
  content: string;
};

export default function EditPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("draft");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [preview, setPreview] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const pw =
    typeof window !== "undefined"
      ? sessionStorage.getItem("admin-pw") || ""
      : "";

  useEffect(() => {
    if (!pw) {
      router.push("/admin");
      return;
    }
    fetch(`/api/admin/posts/${slug}`, {
      headers: { "x-admin-password": pw },
    })
      .then((r) => {
        if (r.status === 401) {
          router.push("/admin");
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (!data || data.error) return;
        setPost(data);
        setTitle(data.title);
        setDesc(data.meta_description);
        setKeyword(data.keyword);
        setStatus(data.status);
        setBody(data.content);
      });
  }, [slug, pw, router]);

  const renderPreview = useCallback(
    (md: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        try {
          const { unified } = await import("unified");
          const remarkParse = (await import("remark-parse")).default;
          const remarkGfm = (await import("remark-gfm")).default;
          const remarkRehype = (await import("remark-rehype")).default;
          const rehypeStringify = (await import("rehype-stringify")).default;

          const result = await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeStringify, { allowDangerousHtml: true })
            .process(md);
          setPreview(String(result));
        } catch {
          setPreview("<p>Preview error</p>");
        }
      }, 400);
    },
    []
  );

  useEffect(() => {
    if (showPreview) renderPreview(body);
  }, [body, showPreview, renderPreview]);

  async function save() {
    setSaving(true);
    setSaved(false);
    await fetch(`/api/admin/posts/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": pw,
      },
      body: JSON.stringify({
        title,
        meta_description: desc,
        keyword,
        status,
        content: body,
        author: post?.author,
        author_title: post?.author_title,
        date: post?.date,
        category: post?.category,
      }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function deletePost() {
    await fetch(`/api/admin/posts/${slug}`, {
      method: "DELETE",
      headers: { "x-admin-password": pw },
    });
    router.push("/admin");
  }

  // Ctrl+S / Cmd+S to save
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        save();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (!post) {
    return (
      <div style={styles.loading}>
        <span style={styles.muted}>loading...</span>
      </div>
    );
  }

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={styles.container}>
      {/* Top bar */}
      <div style={styles.topBar}>
        <button onClick={() => router.push("/admin")} style={styles.backBtn}>
          &larr; posts
        </button>
        <div style={styles.topActions}>
          <span style={styles.wordCount}>{wordCount.toLocaleString()} words</span>
          <button
            onClick={() => setShowPreview(!showPreview)}
            style={{
              ...styles.previewToggle,
              color: showPreview
                ? "var(--accent-orange)"
                : "var(--text-muted)",
            }}
          >
            {showPreview ? "hide preview" : "preview"}
          </button>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={styles.statusSelect}
          >
            <option value="draft">draft</option>
            <option value="published">published</option>
          </select>
          <button onClick={save} disabled={saving} style={styles.saveBtn}>
            {saving ? "saving..." : saved ? "saved" : "save"}
          </button>
        </div>
      </div>

      {/* Meta fields */}
      <div style={styles.metaSection}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          style={styles.titleInput}
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Meta description"
          style={styles.metaInput}
        />
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Target keyword"
          style={styles.metaInput}
        />
      </div>

      {/* Editor + Preview */}
      <div
        style={{
          ...styles.editorWrap,
          gridTemplateColumns: showPreview ? "1fr 1fr" : "1fr",
        }}
      >
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.editor}
          spellCheck={false}
        />
        {showPreview && (
          <div
            className="article-content"
            style={styles.previewPane}
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        )}
      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <span style={styles.muted}>
          {post.date} &middot; {post.category}
        </span>
        {confirmDelete ? (
          <div style={styles.deleteConfirm}>
            <span style={styles.deleteWarn}>delete this post?</span>
            <button onClick={deletePost} style={styles.deleteYes}>
              yes, delete
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              style={styles.deleteNo}
            >
              cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            style={styles.deleteBtn}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "var(--bg)",
  },
  muted: {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    color: "var(--text-muted)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "var(--bg)",
    padding: "0",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    borderBottom: "1px solid var(--border)",
    background: "var(--bg-elevated)",
    position: "sticky" as const,
    top: 0,
    zIndex: 10,
  },
  backBtn: {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    color: "var(--text-tertiary)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px 0",
  },
  topActions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  wordCount: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--text-muted)",
  },
  previewToggle: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
  statusSelect: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    background: "var(--bg-subtle)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "3px",
    padding: "4px 8px",
    cursor: "pointer",
  },
  saveBtn: {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    fontWeight: 500,
    padding: "6px 16px",
    background: "var(--accent-orange)",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    letterSpacing: "0.02em",
    minWidth: "70px",
  },
  metaSection: {
    padding: "16px 20px",
    borderBottom: "1px solid var(--border-subtle)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  titleInput: {
    fontFamily: "var(--font-sans)",
    fontSize: "22px",
    fontWeight: 600,
    color: "var(--text-primary)",
    background: "transparent",
    border: "none",
    outline: "none",
    padding: "4px 0",
  },
  metaInput: {
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    color: "var(--text-secondary)",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--border-subtle)",
    outline: "none",
    padding: "6px 0",
  },
  editorWrap: {
    display: "grid",
    flex: 1,
    gap: "0",
    minHeight: 0,
  },
  editor: {
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "var(--text-primary)",
    background: "var(--bg)",
    border: "none",
    outline: "none",
    resize: "none" as const,
    padding: "20px",
    minHeight: "60vh",
    width: "100%",
    tabSize: 2,
  },
  previewPane: {
    padding: "20px",
    borderLeft: "1px solid var(--border)",
    overflow: "auto",
    background: "var(--bg-elevated)",
    maxHeight: "calc(100vh - 200px)",
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-elevated)",
  },
  deleteBtn: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--text-muted)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
  deleteConfirm: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  deleteWarn: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--accent-red)",
  },
  deleteYes: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "#fff",
    background: "var(--accent-red)",
    border: "none",
    borderRadius: "3px",
    padding: "4px 10px",
    cursor: "pointer",
  },
  deleteNo: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--text-muted)",
    background: "none",
    border: "1px solid var(--border)",
    borderRadius: "3px",
    padding: "4px 10px",
    cursor: "pointer",
  },
};
