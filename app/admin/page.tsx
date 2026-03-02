"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type PostItem = {
  slug: string;
  title: string;
  date: string;
  status: string;
  word_count: number;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-pw");
    if (saved) {
      setPassword(saved);
      fetchPosts(saved);
    }
  }, []);

  async function fetchPosts(pw: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/posts", {
        headers: { "x-admin-password": pw },
      });
      if (res.status === 401) {
        setError("Wrong password");
        setAuthed(false);
        sessionStorage.removeItem("admin-pw");
        return;
      }
      const data = await res.json();
      setPosts(data);
      setAuthed(true);
      sessionStorage.setItem("admin-pw", pw);
    } catch {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    await fetchPosts(password);
  }

  async function createPost() {
    const pw = sessionStorage.getItem("admin-pw") || password;
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "x-admin-password": pw },
    });
    if (res.ok) {
      const { slug } = await res.json();
      router.push(`/admin/edit/${slug}`);
    }
  }

  if (!authed) {
    return (
      <div style={styles.loginWrap}>
        <form onSubmit={handleLogin} style={styles.loginForm}>
          <h1 style={styles.loginTitle}>admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            style={styles.loginInput}
            autoFocus
          />
          <button type="submit" style={styles.loginBtn}>
            enter
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>posts</h1>
        <button onClick={createPost} style={styles.newBtn}>
          + new post
        </button>
      </div>

      {loading && <p style={styles.muted}>loading...</p>}

      <div style={styles.list}>
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => router.push(`/admin/edit/${post.slug}`)}
            style={styles.row}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--bg-subtle)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <div style={styles.rowMain}>
              <span style={styles.rowTitle}>{post.title}</span>
              <span
                style={{
                  ...styles.badge,
                  color:
                    post.status === "published"
                      ? "#4ade80"
                      : "var(--text-muted)",
                  borderColor:
                    post.status === "published"
                      ? "#4ade8040"
                      : "var(--border)",
                }}
              >
                {post.status}
              </span>
            </div>
            <div style={styles.rowMeta}>
              <span>{post.date}</span>
              <span>{post.word_count.toLocaleString()} words</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loginWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "var(--bg)",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "280px",
  },
  loginTitle: {
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    fontWeight: 400,
    color: "var(--text-tertiary)",
    textAlign: "center",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  loginInput: {
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    padding: "10px 12px",
    background: "var(--bg-elevated)",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    color: "var(--text-primary)",
    outline: "none",
  },
  loginBtn: {
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    fontWeight: 500,
    padding: "10px",
    background: "var(--accent-orange)",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    letterSpacing: "0.05em",
  },
  error: {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    color: "var(--accent-red)",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "3rem 2rem",
    minHeight: "100vh",
    background: "var(--bg)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    borderBottom: "1px solid var(--border)",
    paddingBottom: "1rem",
  },
  title: {
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    fontWeight: 400,
    color: "var(--text-tertiary)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  newBtn: {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    fontWeight: 500,
    padding: "8px 16px",
    background: "var(--accent-orange)",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    letterSpacing: "0.02em",
  },
  muted: {
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    color: "var(--text-muted)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  row: {
    padding: "14px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.15s",
  },
  rowMain: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "4px",
  },
  rowTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    fontWeight: 500,
    color: "var(--text-primary)",
  },
  badge: {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    fontWeight: 400,
    padding: "2px 8px",
    border: "1px solid",
    borderRadius: "3px",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
  },
  rowMeta: {
    display: "flex",
    gap: "16px",
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    color: "var(--text-muted)",
  },
};
