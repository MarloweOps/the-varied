# The Varied — Website Spec v2
# thevaried.co
# Reference: Tool of North America, Biscuit Filmworks, Partizan, Stink Films, Caviar Content
# Rule: Production company sites don't explain themselves. The work does.

---

## THE CORE PRINCIPLE

Production company sites are not landing pages. They are:
1. A portfolio with the work front and center
2. A contact card
3. A credibility signal

They do NOT have: feature lists, value propositions, "why choose us", bullet points of services, stock photography, or marketing copy. Every sentence should earn its place or be cut.

---

## Install
```bash
npm install framer-motion
npm install @next/font
```

---

## Design System

### Colors
```css
:root {
  --black:        #080808;   /* true base — the stage */
  --black-soft:   #0f0f0d;   /* card backgrounds */
  --black-lift:   #181816;   /* hover states */
  --cream:        #e8e4db;   /* primary text */
  --cream-muted:  #8a8479;   /* secondary text */
  --cream-dim:    #3d3b36;   /* borders, dividers */
  --gold:         #c5a46e;   /* ONE accent color — use sparingly */
  --gold-hover:   #d4b882;
}
```

**Rule: No other accent colors. No blue. No green. No red. Only gold.**

### Typography
```
Display (hero, project titles):   Cormorant Garamond, 400/700 italic
Headings (nav, section labels):   Inter, 400, tracked, uppercase, 11px
Body:                             Inter, 400, 15-16px
Data/mono (dates, IDs):           JetBrains Mono — sparingly
```

Load from Google Fonts. Set up in app/layout.tsx with next/font/google.

### Spacing
- Sections: min 160px top/bottom padding — let it breathe
- Container: max-width 1280px, padding 0 40px
- Mobile: padding 0 24px

### Grain texture
Add a subtle film grain overlay to the entire site:
```css
/* Pseudo-element on body — CSS grain, no image needed */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
}
```
Use an SVG feTurbulence filter for grain. Subtle — almost invisible but felt.

---

## Navigation

Fixed. Transparent over hero section, transitions to dark bg on scroll.

```
[THE VARIED]                    Work  Director  About  Contact
```

- Logo: "THE VARIED" — Inter, 13px, letter-spacing: 0.25em, --cream
- Links: Inter, 11px, letter-spacing: 0.15em, uppercase, --cream-muted
- On scroll (>100px): adds background rgba(8,8,8,0.95) + blur(12px) backdrop
- Mobile: hamburger icon → full-screen overlay (black bg, centered links, large)
- Active link: --cream (full opacity)

---

## Section 1: HERO (full viewport)

**Dark. Minimal. Typographic.**

No image. No video (save that for when a real reel exists). Just text on black.

Layout: vertically centered, left-aligned.

```
                                       ← top: 60px nav spacer
[spacer]

THE VARIED                             ← Inter 11px, tracked, --cream-dim (small, above headline)

Production craft.                      ← Cormorant Garamond, 88px desktop / 52px mobile
Operational intelligence.              ← same, italic, --cream

[spacer 40px]

Los Angeles · Commercial · Music Video · Branded Content   ← Inter 13px, --cream-muted

[spacer 60px]

Pizza Hut · Netflix · Toyota · BTS · Notion · Atlassian · Sonos ← Inter 12px, --cream-dim
UberEats · Hello Fresh · Drizly · Rabbit · Seventh Generation
```

Subtle: on load, text fades in with a 0.8s opacity + 20px upward translate. Staggered by line (0, 0.15s, 0.3s delays). Use Framer Motion.

Bottom of hero: a thin gold horizontal line (1px, 80% width) and a small "↓" in gold.

---

## Section 2: SELECTED WORK

Section label: "WORK" — Inter 11px, tracked, --cream-dim — top left

**Layout: 2-column grid on desktop, 1 column mobile**

Each project card:
- Background: --black-soft
- Border: 1px solid --cream-dim
- Padding: 48px
- On hover: border-color transitions to --gold (200ms), overlay with subtle gold tint (rgba(197,164,110,0.04))

Card content:
```
[CLIENT NAME]                     ← Cormorant Garamond, 38px, --cream
[Project Name / Description]      ← Inter, 14px, --cream-muted, tracking
                                  
COMMERCIAL · 2025                 ← Inter, 11px, --cream-dim, tracked
```

On hover: show a small "↗" in gold, top right corner of card

No fake thumbnails. Text-based cards look MORE premium than fake images.

**Project list (8 cards, in this order):**
1. BTS — Permission To Dance | Music Video · 2021
2. Netflix — Farewell To DVDs | Commercial · 2023
3. Toyota × NFL — We Roll Deep | Commercial · 2022
4. Notion — For Your Life's Work | Commercial · 2024
5. Atlassian — High Velocity | Commercial · 2023
6. Sonos — Move 2 | Commercial · 2023
7. Pizza Hut × Anderson .Paak | Music Video · 2022
8. UberEats × Burger King | Commercial · 2021

Cards link to # for now (future: individual project pages or Vimeo).

---

## Section 3: DIRECTOR

Section label: "DIRECTOR" — Inter 11px, tracked, --cream-dim

Split layout: Left (60%) = text, Right (40%) = photo

**Left:**
```
Brendan Lynch                     ← Cormorant Garamond, 56px, --cream

Line Producer · Director          ← Inter, 14px, --cream-muted, tracked

[spacer]

Los Angeles-based line producer and director with a decade of experience
in commercial and branded content. Credits include Netflix, Toyota, BTS,
Notion, Atlassian, and more.                   ← Inter, 16px, --cream-muted, line-height 1.8

[spacer]

Reel →                            ← gold link, inter 13px — link to Vimeo placeholder (#)
Contact →                         ← cream-muted link
```

**Right:**
- A styled placeholder for Brendan's headshot
- Use a dark rectangle (--black-soft) with his initials "BL" in Cormorant Garamond, 64px, --cream-dim
- When Brendan replaces with real photo: drop an `<img>` with object-fit: cover
- Image aspect ratio: 3:4 (portrait)
- No border radius — square crop

---

## Section 4: ABOUT

Section label: "ABOUT" — Inter 11px, tracked, --cream-dim

Single column, centered, max-width 640px.

```
The Varied is a commercial production company operating at the intersection of craft
and operational intelligence. We produce high-end commercials, music videos, and branded
content — and we've built the systems to run productions better than anyone.

Founded in Los Angeles. Available worldwide.
```

That's it. No bullets. No feature lists. Two sentences + a location. Trust the work above.

---

## Section 5: TREATMENTS (optional — if building now)

Section label: "TREATMENTS" — Inter 11px, tracked, --cream-dim

Brief line:
```
We write and produce director treatments for commercial and music video productions.
```

Single CTA: "View Treatments →" → links to /treatments page

---

## Section 6: CONTACT

Section label: "CONTACT" — Inter 11px, tracked, --cream-dim

Large, centered:
```
Let's make something.             ← Cormorant Garamond, 72px, italic, --cream

hello@thevaried.co                ← Inter, 18px, --gold, link (mailto)
Los Angeles                       ← Inter, 13px, --cream-muted
```

No contact form needed. Email link is cleaner.

---

## Footer

Minimal. Two rows:
```
THE VARIED                                          © 2026 The Varied
thevaried.co · Los Angeles
```

---

## Page: /treatments

Simple dark page listing director treatments.

```
[Nav]

DIRECTOR TREATMENTS               ← section label style

Treatment cards:
- Treatment name (Cormorant Garamond, 32px)
- Client / project (Inter, 14px, muted)
- "View →" link
```

For now: one treatment card for "Blow Away" linking to the existing treatment doc on the dashboard.
Add more as treatments are created.

---

## Technical Implementation

### app/globals.css
- CSS variables for all colors
- Base styles (bg: --black, color: --cream, font: Inter)
- SVG grain overlay on body::after
- Smooth scroll: html { scroll-behavior: smooth; }
- Selection color: rgba(197,164,110,0.3)

### app/layout.tsx
- Google Fonts: Cormorant Garamond (400, 400i, 700i) + Inter (400) + JetBrains Mono (400)
- Metadata: title, description, OG image
- Include grain overlay, nav, footer

### tailwind.config.ts
- Custom colors matching CSS variables
- Custom fonts (cormorant, inter, mono)
- Container settings

### app/page.tsx
- Nav component (with scroll-triggered bg)
- All 6 sections
- Framer Motion: fade-in on scroll with whileInView, initial={{ opacity: 0, y: 24 }}, animate={{ opacity: 1, y: 0 }}

### components/Nav.tsx
- Client component (useScrollPosition)
- Transparent → solid transition

### components/ProjectCard.tsx
- The work grid card

### app/treatments/page.tsx
- Simple list of treatments

---

## Build & Deploy

1. `npm run build` — must be 0 errors
2. `git add -A && git commit -m "feat: The Varied — production company site"`
3. `git push origin main`
4. Vercel auto-deploys
5. Run: `openclaw system event --text "Done: The Varied website built and deployed to Vercel" --mode now`

---

## What NOT to do
- No hero image or video (text-only hero is more confident when the reel isn't ready)
- No stock photography anywhere
- No gradients on buttons or backgrounds (flat black only)
- No rounded corners on project cards (square = editorial)
- No emoji
- No "Learn More" buttons
- No "Our Services" section with bullet points
- No dashboard-style UI elements (this is not a product)
- No startup language ("leverage", "streamline", "innovative")
- The word "AI" should appear ZERO times on this site

---

## Note on AI
The AI integration is a business differentiator, not a marketing message.
Sophisticated clients don't need to be told "we use AI." They'll feel the operational
quality. If it ever comes up, it's a conversation — not a website section.
