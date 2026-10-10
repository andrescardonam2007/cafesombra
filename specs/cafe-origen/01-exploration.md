# Stage 1 — Exploration

Feature: **Coffee Origin Landing** (`cafe-origen`)
Delivery mode: `single-pr`
Status: awaiting approval at the Stage 1 gate

## Objective

Build an interactive, modern landing page for a local single-origin coffee shop,
with four sections (hero, product catalog, origin story, contact/order form),
using Astro + Tailwind only, no extra dependencies and no remote images.

## Current project state (evidence)

- `package.json` — Astro `^7.3.8`, Tailwind `^4.3.3`, `@tailwindcss/vite ^4.3.3`.
  `type: module`, `engines.node >= 22.12.0`. Scripts: `dev`, `build`, `preview`, `astro`.
- `astro.config.mjs` — Tailwind wired through the Vite plugin. No integrations.
- `src/pages/index.astro` — untouched Astro starter: `<h1>Astro</h1>`, `lang="en"`.
- `src/styles/global.css` — single line: `@import "tailwindcss";`.
- `src/components/`, `src/data/`, `src/content/` — do not exist yet.
- `public/` — only `favicon.ico` and `favicon.svg`.
- No image assets; per brief, visuals must be SVG / gradients / emojis.
- Git: repository initialized, **no commits yet**. Starter files are staged;
  the Tailwind edits (`astro.config.mjs`, `package.json`, lockfile) and
  `src/styles/` are not staged. `master` is the only branch.
- Docs `README.md`, `AGENTS.md`, `CLAUDE.md` are the Astro default templates (English).

## Skills in play

- `frontend-design` (project scope):
  `C:\Users\Cardona\Downloads\proyecto-sdd\.agents\skills\frontend-design\SKILL.md`
  Required behavior: produce a compact design plan (color, type, layout, principles),
  review it against the brief for templated/AI tells, then build. Avoid the known
  defaults (cream `#F4F1EA` + terracotta, all-caps eyebrows, middle-dot meta strings,
  identical rounded cards, fade-and-slide on every section).
- No SDD skill is installed on disk. The 7-stage flow is the one defined by the user.

## Constraints (from the brief)

1. Astro + Tailwind only — **no extra dependencies**.
2. **No remote images** — visuals via inline SVG, gradients, or emojis.
3. Mobile-first responsive layout.
4. Semantic HTML and basic accessibility (landmarks, labels, focus, reduced motion).
5. One Astro component per section, kept separate.
6. The 6-product catalog data lives in a **separate file**.
7. Contact/order form with **client-side validation** and a **simulated** confirmation
   (no backend).
8. Verification runs `npm run build`.
9. Delivery as a **single PR**.

## Sections to deliver

| # | Section | Notes |
| - | ------- | ----- |
| 1 | Hero | First impression; distinctive, not the generic big-number treatment |
| 2 | Product catalog | 6 products, data in a separate module |
| 3 | Origin | Farm story + process map / timeline rendered as cards |
| 4 | Contact / order | Client-validated form + simulated confirmation message |

## Risks and watch items

- **Tailwind v4 is CSS-first.** There is no `tailwind.config.js`; design tokens must
  live in `global.css` via `@theme`. Assuming v3 config will break the build.
- **Astro 7** — verify no removed/renamed APIs when scaffolding components/pages.
- **"Interactive" without a framework.** Interactivity must be small vanilla `<script>`
  islands (form validation, any reveal). No React/Vue/Svelte (extra dependency).
- **Accessibility of simulated feedback.** The confirmation and validation errors need
  `aria-live` / associated error text, not just color.
- **Generic-design trap.** The obvious coffee palette (cream + brown) and the SaaS
  card kit are exactly the defaults `frontend-design` warns against; the plan must
  make deliberate, non-default choices.

## Open questions (to resolve at the Stage 2 gate, not now)

- **Concrete brand identity** — name, region, and story hook. The brief says
  "local origin" but does not name the shop; a concrete identity will be proposed.
- **Copy language** — the target audience is local Spanish-speaking customers, so
  Spanish UI copy is the default assumption; to be confirmed.

## Next stage

Stage 2 — Proposal: design plan (palette, typography, ASCII wireframes, principles),
component architecture, in/out of scope, and acceptance criteria.
