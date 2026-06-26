# AGENTS.md — firmanjs.github.io

## Stack
- **Astro v7** + **Tailwind CSS v4** (via `@tailwindcss/vite` plugin, `@theme` directive in `global.css` for custom colors)
- **TypeScript** strict mode (`astro/tsconfigs/strict`)
- **No test/lint/format tooling** — no devDependencies at all

## Commands
| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

No test, lint, typecheck, or format scripts exist. CI runs `npm ci && npm run build`.

## Content & Conventions
- All content in **Indonesian** (`lang="id"`)
- Blog posts are `.astro` files under `src/pages/blog/posts/`, **not** Markdown
- Static data (services, portfolio, testimonials) defined inline in components, not fetched or stored in CMS
- Inline SVG icons everywhere — no icon library
- Floating WhatsApp button (`WhatsAppButton.astro`) included on most pages

## SEO & Metadata
- Per-page `title`, `description`, `canonical`, `jsonLd` passed as props to `BaseLayout`
- `BaseLayout` auto-injects OG tags, Twitter cards, manifest link
- JSON-LD structured data varies by page: `Person`, `WebSite`, `LocalBusiness`, `Service`, `Article`, `FAQPage`, `ItemList`
- Keywords default in `BaseLayout` — override via props if needed

## External Integrations
- **Medium posts**: fetched client-side via `src/lib/medium.js` using `rss2json.com` API
- **Contact form**: posts to Formspree (`https://formspree.io/f/...`) — action URL in `ContactForm.astro`
- **Google AdSense**: verified via `ads.txt` at root and `public/ads.txt`

## Deployment
- GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on push to `main`
- Node 22, `npm ci`, `astro build` → output in `dist/` uploaded as Pages artifact

## Notable
- `index.html` at repo root is a **legacy fallback** (vanilla HTML, not Astro). The real homepage is `src/pages/index.astro`
- PWA: service worker in `public/service-worker.js` + `manifest.json` — cache-first for static, network-first for HTML
- No package manager lockfile changes without `npm install`
