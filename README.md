# EHATA – Digital Solutions · Portfolio Website

Premium bilingual (EN/AR + RTL) portfolio site for a software studio & programming academy.
Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4 · Motion · GSAP +
ScrollTrigger · Lenis · React Three Fiber + drei + postprocessing · Radix primitives ·
react-hook-form + zod · static-export friendly (`output: "export"` — no server required).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # type-checks, lints-clean compile → then exports static site to ./out
npm run lint       # ESLint (React 19 rules included)
```

The production build is a **fully static site** in `out/` — host it on Netlify, Vercel,
S3, GitHub Pages or any plain file server. `next start` (Node server) also works.
The current project portfolio build prerenders 75 pages, including 44 localized
project-detail pages (22 projects) and 12 localized service-detail pages (6 services).

Before building for deployment, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS
origin (for example, `https://your-domain.com`). The same value is used by canonical
metadata, JSON-LD, `sitemap.xml` and `robots.txt`; rebuild the static export if it changes.
If it is unset, the build omits absolute canonical URLs and sitemap entries instead
of publishing metadata under a placeholder domain.

> Note on `AGENTS.md`: this project uses **Next.js 16.4**, whose APIs differ from older
> versions (global `LayoutProps`/`PageProps` helpers, `cacheComponents` semantics,
> stricter `react-hooks` lint rules). The guides for the exact installed version live in
> `node_modules/next/dist/docs/` — consult them before touching framework-level code.

## Project structure

```
src/
  app/                  static routes, sitemap/robots, global CSS
    (en)/layout.tsx      English root layout for default routes
    ar/layout.tsx        Arabic root layout with server-rendered lang=ar and RTL
    globals.css         brand tokens (CSS variables) + Tailwind 4 @theme mapping
    icon.svg            favicon derived from the E-mark
    sitemap.ts robots.ts
  components/
    ui/                 primitives: MagneticButton, TiltCard, SplitHeading/Reveal,
                        AnimatedCounter, Marquee, Accordion, Modal, Section, ProjectCover
    sections/           page sections (hero, stats, featured, courses, testimonials,
                        cta, about, projects explorer, services, contact)
    three/              R3F scene modules (not mounted by the current homepage)
    layout/             Navbar, Footer, ScrollProgress, Logo, toggles, social icons
    providers/          LocaleProvider (EN/AR), theme, Lenis, page transitions
  data/                 ALL editable content, typed (types.ts) — start here
  messages/             en.json / ar.json — UI strings (nav, headings, form labels…)
  lib/                  i18n helpers, hooks (reduced-motion, 3D capability), utils, icons
```

## Editing content

Everything editorial lives in **`src/data/`** (typed TS) and **`src/messages/`** (JSON).
Bilingual fields are `{ en, ar }` objects resolved by `useLocale().tr()`.

| Want to change…            | File |
|----------------------------|------|
| Nav, contact info, socials | `src/data/site.ts` |
| Portfolio counts           | `src/data/stats.ts` (derived from `src/data/projects.ts`) |
| Services (+ ids used by the contact-form dropdown) | `src/data/services.ts` |
| Service-specific detail copy and target audiences | `src/data/service-details.ts` |
| Projects & verified scope  | `src/data/projects.ts` |
| Project-specific client explanations, usage scenarios and audiences | `src/data/project-client-guides.ts` |
| Courses                    | `src/data/courses.ts` |
| Verified testimonials, team bios and timeline | `src/data/testimonials.ts` `team.ts` `timeline.ts` (empty until real, verified content is supplied) |
| Process / values | `src/data/process.ts` |
| Pricing models & FAQ       | `src/data/pricing-faq.ts` |
| About long-form copy       | `src/data/about.ts` |
| Tech marquee               | `src/data/tech.ts` |
| UI strings (both languages)| `src/messages/en.json` / `ar.json` |

## Swapping the logo / brand

- The on-page mark is inline SVG in `src/components/layout/logo.tsx` (+ `public/icon.svg`
  favicon). A 3D model approximation remains in `src/components/three/e-model.tsx`, but
  is not mounted on the current homepage.
- To use your real files: replace `public/logo.png` (OG image) and the
  favicon copies (`src/app/icon.svg`, `src/app/favicon.ico`, `public/icon.svg`).
- Colors/typography are CSS variables in `src/app/globals.css` (`--navy`, `--blue`,
  `--sky`, `--slate`, `--bg`, `--gradient-signature`, radii, glows). Change them once,
  the whole site follows. Dark-mode tokens live in the same file's `.dark` block.

## Wiring the contact form (no backend)

`src/components/sections/contact-form.tsx`:

1. **Formspree / EmailJS / web3forms** — create `.env.local`:
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourid`
   The form POSTs JSON there and shows the animated success state.
2. **No endpoint set (default)** — submit opens the visitor's mail client
   pre-filled (mailto fallback), and the success panel explains what happened.

Rebuild after changing env values (`NEXT_PUBLIC_*` is inlined at build time).

## Maps

The contact page ships a styled map placeholder band. Replace the block in
`src/components/sections/contact-sections.tsx` (marked `Map placeholder`) with a
Google Maps `<iframe>` embed.

## SEO before launch

- Set your real domain in `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`
  (search for `ehata.example.com`).
- Metadata & Open Graph are defined per page; add `public/og.png` if you want a custom
  share image (currently `/logo.png` is used).

## Accessibility & performance notes

- Reduced motion: `prefers-reduced-motion` disables Lenis, GSAP timelines, split-text,
  counters and other motion effects. The homepage uses a static brand mark rather than
  a WebGL hero; the 3D scene modules remain available but are not currently mounted.
- The portfolio contains 14 selected, source-reviewed projects across web, SaaS,
  desktop, learning and interactive categories. Each project detail explains its
  problem, approach, implemented features, intended users and architecture.
- Each project card opens a dedicated, statically generated case-study page in English
  (`/projects/<slug>/`) and Arabic (`/ar/projects/<slug>/`). Pages include translated
  metadata, language alternates, visible breadcrumbs, JSON-LD `WebPage` and
  `BreadcrumbList`, detailed project content, related internal links and a project-
  specific contact CTA. They do not use fabricated author/date fields or FAQ rich-result
  markup.
- Project covers are original SVG illustrations in `public/images/projects/`, not
  screenshots of the applications. Incomplete commerce work and visual prototypes are
  explicitly labeled; descriptions avoid claiming live deployments or customer results.
- Duplicate project copies, third-party downloads and projects with unclear provenance
  are not presented as separate original products.
- Keyboard: skip link, focus-visible rings, Radix dialog/accordion (focus traps),
  slider arrows + aria-live. Mobile bar never overflows 360px.
- Verified at 360 / 768 / 1280 / 1920 with no horizontal scroll; Lighthouse scores were
  not executed as part of this build (run `npx lighthouse http://localhost:3000` on a
  production build for the official numbers).
```
