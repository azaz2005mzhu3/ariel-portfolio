# AGENTS.md

## Project

Static, no-build personal portfolio website (plain HTML/CSS/JS, no npm/bundler/framework). Built for Ariel per [docs/PRD.md](docs/PRD.md) and [docs/PROPOSAL.md](docs/PROPOSAL.md) — read those for content/design intent before adding sections or copy.

## Structure

- `index.html`, `about.html`, `education.html`, `experience.html`, `contact.html` — one file per page, each a full HTML document (no templating/includes).
- `assets/css/styles.css` — single global stylesheet using CSS custom properties defined in `:root` (colors, font, max-width, radius). Reuse these variables instead of hardcoding values.
- `assets/js/main.js` — single vanilla JS file: mobile nav toggle + active-nav-link highlighting via `document.body.dataset.page`.
- `assets/images/`, `assets/resume/` — static assets (resume PDF referenced in HTML but not yet added to the repo).

## Conventions

- Every page repeats the same `<header class="site-header">` nav block verbatim, and sets `<body data-page="...">` matching its own nav link's `data-page` attribute — the active-link highlighting in `main.js` depends on this match. Keep both in sync when adding/renaming pages.
- All internal links and asset paths are root-relative (e.g. `assets/css/styles.css`, `index.html`), assuming the site is served/opened from the repo root — don't switch to absolute paths.
- Class naming follows BEM-like conventions (`.hero__grid`, `.btn--primary`, `.nav__cta`).
- No JS framework, bundler, or package manager — edit `main.js`/`styles.css` directly; don't introduce build tooling unless asked.

## Workflow

No build/test/lint commands exist. Preview by opening HTML files directly in a browser or via a local static server (e.g. `npx serve` or VS Code Live Server) — there is no dev server task configured.
