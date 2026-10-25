# Website development

Static site built with Astro 5 and Tailwind CSS, in Spanish (`/`) and English (`/en/`). All text lives in Markdown, so it can be edited without touching the components.

## Content

| Content | Folder |
|---|---|
| Hero, about and contact | `src/content/site/{es,en}/` |
| Services | `src/content/services/{es,en}/` |
| Work process | `src/content/process/{es,en}/` |
| Projects (use `client` and `year` for work done for clients) | `src/content/projects/{es,en}/` |
| Tech stack | `src/content/skills/{es,en}/` |
| Interface strings | `src/utils/i18n.ts` |

Each collection's schema is in `src/content.config.ts`.

## Local development

```bash
bun install      # or npm install
bun run dev      # http://localhost:4321/leandrofus/
bun run build    # outputs to dist/
bun run preview  # serves the build
```

The site is served under `/leandrofus` (see `base` in `astro.config.mjs`).

## Deploy

Every push to `main` publishes to GitHub Pages through `.github/workflows/deploy.yml`.
