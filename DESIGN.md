# DESIGN.md — Escuela Brahmavidya

Design system tokens for all agents working on this project.
This file is the single source of truth. Skills must not invent values outside it.

---

## Brand

**Name:** Escuela Brahmavidya  
**Tagline:** El trabajo interior, estructurado.  
**Language:** Spanish (es)  
**Tone:** Contemplative, warm, authoritative — not tech-SaaS, not generic wellness.

---

## Color Palette

```
--cream:      #FAF7F0   /* primary background */
--cream-2:    #F0E9DC   /* secondary background, hover states */
--cream-3:    #E8DDD0   /* pressed / subtle depth */
--elevated:   #FFFFFF   /* card surface, one step above --cream; use only on cards/panels sitting on --cream */
--ink:        #1A1410   /* primary text */
--ink-2:      #2D261E   /* secondary headings */
--muted:      #6B5D52   /* body text, captions */
--muted-lt:   #9E8F84   /* labels, placeholders */
--hairline:   rgba(26,20,16,0.10)   /* borders */
--hairline-2: rgba(26,20,16,0.16)   /* stronger borders */

/* Accents */
--sage:       #2A5F4A   /* primary accent, CTAs, active states */
--sage-lt:    #3A7860   /* hover on sage */
--sage-pale:  #EBF2EE   /* sage chip backgrounds */
--gold:       #B8920A   /* secondary accent — event types, warnings */
--gold-pale:  #FDF8E6   /* gold chip backgrounds */
--terra:      #9B4520   /* tertiary — retiro events, special */
--terra-pale: #FAF0EB   /* terra chip backgrounds */
```

Do not use pure black `#000` or pure white `#FFF`. Do not invent new hex values.

---

## Typography

```
--serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif
--sans:  'DM Sans', system-ui, sans-serif
--mono:  'JetBrains Mono', 'Courier New', monospace
```

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

**Usage:**
| Role | Font | Weight | Size range |
|------|------|--------|------------|
| Display H1 | Cormorant Garamond | 600–700 | `clamp(48px, 5.5vw, 76px)` |
| Section H2 | Cormorant Garamond | 600 | `clamp(36px, 4vw, 56px)` |
| Card H3 | Cormorant Garamond | 600 | 20–26px |
| Body | DM Sans | 400 | 16–17px |
| Body small | DM Sans | 400 | 13–14.5px |
| Label/meta | JetBrains Mono | 400 | 9.5–11px, uppercase, `letter-spacing: 0.18–0.22em` |

Letter-spacing on display: `-0.015em`.  
No Inter, Roboto, Helvetica, or Open Sans.

---

## Spacing & Layout

```
max-width: 1200px
padding (horizontal): 32px (desktop), 20px (mobile)
section vertical padding: 96px (desktop), 64px (tablet), 48px (mobile)
```

**Breakpoints:**
- Mobile: `≤ 600px`
- Tablet: `≤ 900px`
- Desktop: `> 900px`

**Grid approach:** CSS Grid, traditional columns. No bento-grid SaaS aesthetic.
At mobile, all multi-column layouts collapse to single column.

---

## Depth & Elevation

**Border radius:**
```
--r-sm: 8px     /* chips, tags, small elements */
--r-md: 14px    /* cards, inputs */
--r-lg: 24px    /* large cards, panels */
```

**Shadows:** Soft, warm, low-opacity only:
```
card:     0 1px 0 rgba(255,255,255,0.8) inset, 0 0 0 1px var(--hairline), 0 24px 64px -24px rgba(26,20,16,0.18)
hover:    0 12px 36px -12px rgba(26,20,16,0.14)
dark-bg:  0 30px 80px -40px rgba(10,10,10,0.6)
```

No double-bezel pattern. No hard drop shadows. No neon or glow effects.

---

## Buttons

**Primary:**
```css
background: var(--sage);
color: #fff;
padding: 10px 22px;
border-radius: var(--r-md);  /* 14px */
font: 500 14px/1 var(--sans);
```
Hover: `background: var(--sage-lt)`

**Ghost:**
```css
background: transparent;
color: var(--muted);
border: 1px solid var(--hairline-2);
padding: 10px 22px;
border-radius: var(--r-md);
```
Hover: `background: var(--cream-2); color: var(--ink)`

No pill-shaped (`border-radius: 999px`) primary buttons. Use `--r-md` (14px).

---

## Components

**Banner slot** (top of every page):
```html
<div class="banner-slot" id="banner-slot">
  <!-- placeholder until custom banner design arrives -->
  <div class="banner-placeholder">
    <span>Banner — diseño personalizado por incorporar</span>
  </div>
</div>
```
- Full-width, `min-height: 160px`
- Background: `var(--cream-2)`, border-bottom: `2px dashed var(--hairline-2)`
- Centered placeholder text in mono, muted-lt color
- Replace entire `.banner-slot` element when final design arrives

**Navigation (sticky header):**
- Full-width sticky, `height: 68px`
- Background: `rgba(250,247,240,0.92)` with `backdrop-filter: blur(18px)`
- Border-bottom: `1px solid var(--hairline)`
- Left: wordmark in Cormorant Garamond 22px/600
- Center: nav links (DM Sans 14px, color: muted, hover: ink)
- Right: primary CTA button
- Mobile: hide center nav links

**Section eyebrow:**
```html
<div class="section-label">01 · El Camino</div>
```
Mono font, 10px, `letter-spacing: 0.22em`, uppercase, color: `var(--sage)`

**Event type chips:**
| Type | Dot color | Background |
|------|-----------|-----------|
| meditacion | `--sage` | `--sage-pale` |
| curso | `--gold` | `--gold-pale` |
| retiro / especial | `--terra` | `--terra-pale` |

---

## Motion

All transitions: `cubic-bezier(0.16, 1, 0.3, 1)` — no `linear`, no `ease-in-out`.
Scroll entry: `opacity 0→1 + translateY(20px→0)` over 700ms via IntersectionObserver.
Hover card lift: `transform: translateY(-2px)` over 250ms.
Only animate `transform` and `opacity`.
Respect `prefers-reduced-motion`.

---

## Anti-patterns (banned)

- SaaS bento grids with double-bezel cards
- Floating pill navbar (`border-radius: 999px` on nav container)
- Ambient animated mesh blobs on hero
- Generic AI copy: "Seamless", "Elevate", "Unleash", "Next-Gen"
- Hard drop shadows
- Glassmorphism beyond navbar blur
- Tech-startup dark mode as default

---

## Pages

| Page | Path | Status |
|------|------|--------|
| Landing | `public/index.html` | Design update in progress |
| Agenda 2026 | `public/agenda-2026.html` | New — calendar + courses tabs |

Both pages share this design system and the banner slot at the top.

---

## Agent Prompt Guide

- Always read this file before writing any HTML or CSS.
- Do not invent hex values not in the palette above.
- The banner slot must appear on every page, above the sticky nav.
- The saas-landing and web-prototype-taste-soft skills are overridden by this DESIGN.md where they conflict.
- Spiritual content decisions are Roger's domain — do not editorialize.
