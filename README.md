# Anas Mohammed Idris Mohammed — Portfolio

Full-Stack Software Engineer personal portfolio. Static website (HTML5 + CSS3 + Vanilla JavaScript) designed for GitHub Pages.

## Project Structure

```
/
├── index.html              # Single-page semantic structure
├── .nojekyll               # Forces GitHub Pages to copy through (file:// safe)
├── css/
│   ├── style.css           # Design system (Forest & Mint), layout, components
│   ├── hero.css            # Sylva moss scene + liquid-metal CTA (scoped)
│   ├── animations.css      # Reveal, hero, modal animations + reduced-motion
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── main.js             # Entry point: boots render + nav + modal + animations
│   ├── hero-scene.js       # Sylva "Living Green" Three.js moss scene (hero)
│   ├── liquid-metal.js     # Liquid-metal CTA renderer (WebGL2)
│   ├── components.js       # Renders all sections from data files
│   ├── modal.js            # Project details modal (ESC, click-outside, focus trap)
│   ├── nav.js              # Sticky navbar, mobile menu, scroll-spy, progress, top
│   ├── animations.js       # IntersectionObserver reveal logic
│   └── data/               # ← DATA LAYER: edit content here
│       ├── personal.js     # Name, title, about, why-work-with-me
│       ├── skills.js       # Skill categories
│       ├── projects.js     # All projects + filter definitions
│       ├── experience.js   # Work timeline + responsibilities
│       ├── education.js    # Degree + coursework
│       ├── services.js     # "What I Can Build" services
│       └── social.js       # Email, phone, LinkedIn, GitHub, location
└── assets/
    ├── favicon/favicon.svg
    ├── fonts/lexend-latin.woff2   # Self-hosted Lexend (no CDN)
    └── hero/
        ├── vendor/three.min.js     # Local three.js r1xx build
        └── inner-green-3d.html     # Reference copy of the authored scene page
```

## Run Locally

Any of these works:

1. Double-click `index.html` (no server needed — classic scripts, works on `file://` in all browsers).
2. Live Server (VS Code): open the folder → right-click `index.html` → Open with Live Server.

## Deploy to GitHub Pages

1. Create a repository on GitHub.
2. Push this folder to the repo:
   - `git init && git add . && git commit -m "Initial portfolio" && git remote add origin <repo-url> && git push -u origin main`
3. Repository → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main` → save.
   - Or use GitHub Actions if you prefer a workflow.
4. Site is live at `https://<username>.github.io/<repo-name>/`.

## Editing Content

All content lives in `js/data/*.js` — the design never needs touching:

| What | File |
| --- | --- |
| Name, title, about text, domains | `js/data/personal.js` |
| Skill categories | `js/data/skills.js` |
| Projects & filters | `js/data/projects.js` |
| Work experience | `js/data/experience.js` |
| Education | `js/data/education.js` |
| Services | `js/data/services.js` |
| Contact links | `js/data/social.js` |

To add a project: edit `js/data/projects.js`, follow the existing object shape, and include the relevant filter ids in `filters`.

## Notes

- No backend, no database, no framework, no ES modules. Pure static site that runs by double-clicking `index.html`.
- Data lives in `js/data/*.js`, each setting `window.AMData.<name>`; loaded before the render scripts in `index.html`.
- No invented statistics or testimonials; all content is sourced from the CV. `js/data/*` was **not modified** by the redesign.
- Respects `prefers-reduced-motion`. Hero scene autoplay pauses when the hero is off-screen or the tab is hidden.
- Accessible: semantic HTML, ARIA, keyboard navigation, focus states.

## Design Refresh & Hero Upgrade — Change Log

Visual-only restyle + new hero visual layer. No content changes; all original IDs, anchors, and section order preserved.

### What changed
- **Design system** (`css/style.css`): rebuilt on a light `paper` base with a distinct deep `forest` axis. Token map:
  - Deep surfaces: `--bg-deep #10221A`, `--surface-deep #19382B`, `--surface-deep-2 #20412F`
  - Accent mint: `--accent #34D399`, `--accent-hover #2BBF8A`, on-light text `--accent-ink #047857`
  - Light base: `--paper #F3F8F5`, `--card #FFFFFF`, `--ink #10221A`
  - Shape: `--r-sm/--r-md/--r-lg/--r-xl/--r-pill`, `--container`, `--section-pad`
  - Motion: `--ease cubic-bezier(.22,.61,.36,1)`, `--dur-fast 160ms`, `--dur 320ms`, `--dur-slow 600ms`
  - Elevation: forest-tinted `--shadow-s/m/l` + `--shadow-accent` (no pure-black shadows)
- **Hero** (`css/hero.css` + `assets/hero/*`): replaced the terminal visual with the **Sylva "Living Green" moss scene** (Three.js WebGL) framed on the existing hero, plus a **liquid-metal "Explore My Projects" CTA** (WebGL2 shader). Hero text, keywords, and the "Contact Me" ghost CTA are unchanged.
  - `--u` (scene unit grid) is **scoped to `.sylva-hero`** so it cannot affect the rest of the page.
  - Canvas only becomes visible once the scene boots (`.sylva-hero.is-ready.sylva-scene`); until then / if WebGL is unavailable / under `prefers-reduced-motion`, a static forest-gradient fallback shows.
- **Header/nav**: now a translucent forest pill that floats over the hero and flips to a paper pill once scrolled (`is-scrolled`).
- **Mobile**: filter chips scroll horizontally; modal becomes a full-width bottom sheet; a 5-item bottom tab bar (Home/About/Skills/Projects/Contact) appears below 900px and is driven by the existing nav scroll-spy (additive `[data-tab]` mirror).
- **Modal**: sticky "Start a Project" footer button added (static HTML, no JS logic change).
- **Performance**: DPR capped at 2 (1.5 on small/mobile screens), render loop pauses off-screen via IntersectionObserver and when the tab is hidden, resize is debounced (120ms), `webglcontextlost` drops the renderer. `window.__AVHeroScene` and `window.__AV_NO_SCENE` are the app hooks; the liquid renderer no-ops when WebGL2 is missing.

### New assets
- `assets/fonts/lexend-latin.woff2` (self-hosted Lexend — Google Fonts link removed, `file://` friendly)
- `assets/hero/vendor/three.min.js` (local three.js)
- `assets/hero/inner-green-3d.html` (reference snapshot of the authored ThreeUI page — **not loaded** by the site)
- Added runtime weight ≈ 800 KB, dominated by the local three.js build (unavoidable under the no-CDN constraint; the authored scene shipped far heavier remote imagery).

### Could not reproduce exactly (declared divergences)
- **Registered-source mismatch**: the requested registered bundle snapshot (`sha256 69c3694b…`) is not retrievable; the port was made from the **live** revision `c5de3e42e1a088aeb2fe6a0430dedc03664ed02c59ec0fb9432b5724fb51ed61` of `threeui.com/landing-pages/inner-green-3d.html`.
- **`.pill-clip` crop frame dropped**: the liquid CTA mounts directly in the hero CTA row (no cropping/clipping frame around it).
- **DPR on mobile**: author 1.6 → capped to 1.5 per the performance brief.
- **Liquid CTA label**: "Explore the work" → "Explore My Projects" to match portfolio intent; it is an anchor (`#projects`) rather than a plain button.
- Authored content only relevant to the Sylva brand (cards, dock nav, filmstrip, stats) was not ported — the hero shows the moss scene + the portfolio's own copy.

## Post-deploy Audit — Change Log (2026-10-01)

Behaviour-only fixes after the first GitHub Pages deploy (`/portfolio/`). Content, data, section order, and element IDs unchanged; no markup/data edits.

### Root causes fixed
- **Mobile menu mispositioned / half-width / transparent**: `backdrop-filter` on `.site-header .nav` made it the containing block for the `position: fixed` panel, so the panel laid out relative to the nav box instead of the viewport. The pill's glass now lives on a `.nav::before` (z-index −1); the open panel is `position: fixed; inset: 0`, opaque `--bg-deep`, `100dvh`, `overflow-y: auto` + `overscroll-behavior: contain`, closed with `translateX(100%) + visibility: hidden + inert` (no horizontal scrollbar, no tabbable content while closed).
- **Invisible sections on some phones**: reveals only start hidden when `.js` is present on `<html>` (set inline in `<head>`), observer now `threshold: 0` with a 1.5s in-viewport failsafe + `pageshow` recovery, reduced-motion unveils everything, and each boot module runs in its own `try/catch` (one bad module can no longer blank the site).
- **Header/bottom-bar contrast**: the mobile header is always a dark opaque pill with light text (also when scrolled); the bottom tab bar is dark `--surface-deep` (~0.95), labels 0.72rem, accent active state, 44px touch targets, safe-area padding, and hides while the menu or modal is open.
- **Hero seam**: `100svh` now guarded by a `100vh` fallback; the bottom gradient seam is preserved.
- **Desktop white background lost after deploy**: deployed HTML/CSS were verified **identical** to the working tree (CRLF-normalized diff, balanced braces, no `prefers-color-scheme`) → stale client cache. Fix = cache-busting `?v=20261001` on all CSS/JS links; also added `viewport-fit=cover`.
- Added a z-index token scale (`--z-back-top` … `--z-skip`) to replace scattered literals.