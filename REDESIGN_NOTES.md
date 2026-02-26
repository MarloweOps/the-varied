# Redesign Notes — v2 → v3
# Feedback: cards feel like personal CV. Need production company feel.
# Reference: Pretty Bird, Partizan, Biscuit, Ways & Means

## What changes

### REMOVE
- 8 project cards (too much "here are my credits" energy)
- "WORK" section label with cards linking to jobs

### REPLACE WITH: Client Marquee
Two-row scrolling marquee of client names — styled text only, no images needed.
Row 1 scrolls left, Row 2 scrolls right (opposite direction = elegant tension).
Names in Inter, 11px, uppercase, tracking-[0.2em], text-[var(--cream-dim)].
Each name separated by a thin · divider.
On hover: pause animation, name brightens to --cream.

Row 1: NETFLIX · BTS · TOYOTA · NOTION · ATLASSIAN · SONOS · PIZZA HUT
Row 2: UBEREATS · HELLOFRESH · M&MS · RABBIT · RESY · ONEREPUBLIC · FATBOY

Section: no label. Just the marquee. Let the names speak.
Thin border-t border-b border-[var(--border)] wrapping the marquee.
py-8 inside.

### HERO: keep but tighten copy
Current two lines are fine. Remove the second client name row from hero 
(it's redundant if we have the marquee below). Keep the subtext line.

### DIRECTOR SECTION: add reel placeholder
Add a "REEL COMING SOON" or just a Vimeo link placeholder styled as a button-less text link.

### OVERALL STRUCTURE (matches production co sites)
Nav → Hero → [thin divider] → Client Marquee → [thin divider] → Director → About → Contact → Footer
