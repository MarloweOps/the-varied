# The Varied — Website Spec
# thevaried.co
# Built by: Codex (Beaumont leading design, Kyd leading copy, Webster leading build)

---

## Brand & Positioning

**The Varied** is a production company and creative services studio operating at the intersection of high-end commercial production and AI-integrated operations.

NOT: a tech startup, an AI company, a generic agency
IS: a production company that runs on craft, experience, and operational intelligence

**Tagline options (use one in hero):**
- "Production craft. Operational intelligence."
- "We make the work. We run the room."
- "Real production. Built different."

**One-line description:**
"We produce high-end commercial and branded content — and we've built the operational infrastructure to do it better than anyone."

**The AI angle:** Woven in as capability, not as identity. We don't say "AI company." We say "We've integrated AI into every layer of how we operate — from pre-production to wrap." It's a differentiator, not the headline.

---

## Client List (use these exact names — real credits)

Pizza Hut · Netflix · Toyota · BTS · UberEats · Hello Fresh · Notion · Atlassian · Sonos · Drizly · Burger King · Keke Palmer · One Republic · Seventh Generation · Anderson .Paak · Lil Dicky · Resy · Amex · Del Real · Rabbit · Angelisco Tequila · M&M's · Totino's

---

## Design Direction

**Aesthetic:** Dark, editorial, cinematic. Think: Tool of North America, Anonymous Content, Ridley Scott Associates — production company gravitas, not startup energy.

**NOT:** Emoji, gradient buttons, dashboard-style charts, stock photography, generic hero images

**Color palette:**
```
--bg-primary:   #0a0a08  /* near-black, warm */
--bg-surface:   #111110  /* card/section bg */
--bg-elevated:  #1a1a18  /* hover states */
--text-primary: #f0ede6  /* warm off-white */
--text-muted:   #8a8680  /* muted warm gray */
--text-dim:     #4a4845  /* very muted */
--accent:       #c8a97e  /* warm gold — the one accent color */
--accent-hover: #d4b78a
--border:       rgba(240,237,230,0.08)
--border-hover: rgba(240,237,230,0.15)
```

**Typography:**
- Display/hero: "Cormorant Garamond" or "Playfair Display" — editorial, cinematic serif. Load from Google Fonts.
- Body: Inter — clean, invisible
- Mono/data: JetBrains Mono — only for technical details
- All caps + wide letter-spacing for labels/section markers (Inter, 11px, --text-dim)
- NO DM Sans, NO Source Serif 4 (those are OPA brand, not The Varied)

**Spacing:** Generous. This site breathes. Sections have padding-top/bottom of min 120px.

**Animation:** Subtle. Fade-in on scroll (IntersectionObserver, no library needed). No bouncing, no parallax overflow. Think editorial magazine, not SaaS landing page.

**Mobile:** Fully responsive. Single column on mobile, max-width 1400px on desktop.

---

## Site Architecture

Single page with smooth scroll + fixed minimal nav. OR separate pages — builder's choice based on content volume.

### Nav (fixed, minimal)
```
THE VARIED                    Work  Services  Contact
```
- Logo: "THE VARIED" in Cormorant Garamond, tracked wide, 18px
- Links: Inter, 13px, uppercase, tracked
- Transparent over hero, dark bg on scroll
- Mobile: hamburger → full-screen overlay menu

---

## Sections

### 1. HERO (full viewport)

**Visual:** Dark background, large typography. NO stock photo hero. Consider: subtle grain texture overlay on near-black bg.

**Content:**
```
THE VARIED

Production craft.
Operational intelligence.

[small line — muted]
Los Angeles — Commercial · Music Video · Branded Content
```

Headline in Cormorant Garamond, 90-120px, line-height 0.95, left-aligned or centered. Feels like a magazine cover.

Optional: Subtle looping video reel in background at very low opacity (15-20%) — just texture, not distracting. If Brendan has a reel file, link it. Otherwise skip.

CTA: Two ghost buttons — "View Work ↓" and "Get in Touch →"

---

### 2. CLIENTS / BRAND WALL

Section label: "SELECTED CLIENTS" — small, muted, tracked

Layout: Single horizontal scrolling row of client names in text (not logos — cleaner, more editorial). Typography: Cormorant Garamond italic, 24px, warm off-white, spaced with · separators. On hover: gold accent color.

```
Pizza Hut · Netflix · Toyota · BTS · UberEats · Notion · Atlassian · Sonos · Burger King · Drizly · Hello Fresh · Amex · Rabbit · Seventh Generation
```

Auto-scroll animation (CSS marquee, smooth, pausable on hover). This establishes credibility immediately.

---

### 3. WHAT WE DO

Section label: "SERVICES"

Three columns, each with:
- Number marker: "01", "02", "03" in mono, small, muted
- Title in Cormorant Garamond, 32px
- Description in Inter, 16px, muted
- No icons, no checkmarks

**Column 1: Commercial Production**
"We produce high-end commercials, music videos, and branded content. Real crews. Real locations. Real results. From concept through wrap."

**Column 2: Creative Direction**
"Director treatments. Visual development. Pre-production strategy. We help ideas become shootable realities — and we make sure they're shot the right way."

**Column 3: AI-Integrated Operations**
"We've built AI into every layer of how we operate. Production management, crew coordination, budget intelligence. The same infrastructure that runs our own productions is available to our clients."

---

### 4. THE WORK (selected projects)

Section label: "SELECTED WORK"

Grid of project cards, 2-3 columns.
Each card:
- Dark bg with subtle border
- Project title (large, Cormorant Garamond)
- Client name (small, muted)
- Type badge (COMMERCIAL · MUSIC VIDEO · BRANDED CONTENT)
- On hover: gold border highlight + "View →" text appears

Use real projects from brendanlynch.co:
1. Pizza Hut × Anderson .Paak — Music Video
2. BTS — Permission To Dance — Music Video
3. Netflix — Farewell To DVDs — Commercial
4. Toyota × NFL — We Roll Deep — Commercial
5. Notion — For Your Life's Work — Commercial
6. Atlassian — High Velocity — Commercial
7. Sonos Move 2 — Commercial
8. UberEats × Burger King — Commercial

For now: cards link to # (placeholder). Later: individual project pages or Vimeo links.

---

### 5. DIRECTOR TREATMENTS

Section label: "TREATMENTS"

Simple section explaining the director treatment service:
"We write, design, and produce director treatments for commercial and music video productions. Visual language, concept development, and creative execution — documented."

Single CTA button: "View Treatments →" → links to /treatments or the existing /docs page on dashboard (or a new page on this site)

---

### 6. ABOUT

Section label: "ABOUT"

Split layout: Left = text, Right = subtle visual (could be a dark gradient texture or a styled image placeholder)

**Copy:**
```
We are a production company.

We've spent years on set, in production offices, and in edit bays building the instincts that make work good — and the systems that make it sustainable.

The Varied is the infrastructure we've always wanted. A production operation built on craft, grounded in experience, and optimized with every tool available — including AI.

Founded by Brendan Lynch, line producer and production manager with credits across Netflix, Toyota, BTS, Notion, and more.

Los Angeles · Available worldwide.
```

---

### 7. CONTACT

Section label: "LET'S TALK"

Simple. Dark. Two-column: left = text, right = form (or just email).

**Left:**
```
New project? Partnership?
Just say hello.

ops@useopa.com
[or: hello@thevaried.co — Brendan to confirm]

Los Angeles, CA
```

**Right:** Simple contact form — Name, Email, Message, Send. Or just a mailto link if no backend needed.

---

### 8. FOOTER

Minimal dark footer:
```
THE VARIED                               © 2026 The Varied. All rights reserved.
thevaried.co
Los Angeles
```

---

## Technical Requirements

**Stack:**
- Next.js 14, App Router, TypeScript
- Tailwind CSS
- Framer Motion (for scroll animations — worth adding for this site)
- Google Fonts: Cormorant Garamond + Inter + JetBrains Mono

**Install:**
```bash
npm install framer-motion
```

**Pages:**
- `/` — Main site (all sections, smooth scroll)
- `/treatments` — Director treatments list (can be a simple page for now)

**Performance:**
- No heavy images (use CSS backgrounds/gradients for hero)
- Client name marquee: pure CSS animation
- Scroll animations: IntersectionObserver or Framer Motion `whileInView`

**SEO:**
- Title: "The Varied — Production Craft. Operational Intelligence."
- Description: "Los Angeles production company. Commercial, music video, and branded content. AI-integrated operations."
- OG image: dark bg with "THE VARIED" wordmark

---

## Deployment

1. Connect to GitHub: git remote add origin https://github.com/MarloweOps/the-varied
2. Push to main
3. Create Vercel project → import from GitHub → auto-deploy
4. Add domain: thevaried.co (Brendan updates DNS at Namecheap → CNAME to cname.vercel-dns.com)

---

## Completion Signal

When done:
1. Run: `npm run build` — must be 0 errors
2. Commit all files
3. Push to GitHub (origin main)
4. Run: `openclaw system event --text "Done: The Varied website built — ready for Vercel deploy and domain connection" --mode now`
