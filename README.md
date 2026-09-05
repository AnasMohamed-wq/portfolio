# Anas Mohammed Idris Mohammed — Portfolio

Full-Stack Software Engineer personal portfolio. Static website (HTML5 + CSS3 + Vanilla JavaScript) designed for GitHub Pages.

## Project Structure

```
/
├── index.html              # Single-page semantic structure
├── css/
│   ├── style.css           # Design system (Forest & Mint), layout, components
│   ├── animations.css      # Reveal, hero, modal animations + reduced-motion
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── main.js             # Entry point: boots render + nav + modal + animations
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
    └── images/             # (reserved for future use)
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
- No invented statistics or testimonials; all content is sourced from the CV.
- Respects `prefers-reduced-motion`.
- Accessible: semantic HTML, ARIA, keyboard navigation, focus states.