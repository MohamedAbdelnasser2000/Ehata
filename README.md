# EHATA – Digital Solutions · Portfolio Website

Premium bilingual (EN/AR + RTL) portfolio site for a software company & programming academy.
Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4 · Motion · GSAP +
ScrollTrigger · Lenis · React Three Fiber + drei + postprocessing · Radix primitives ·
react-hook-form + zod · static-export friendly (`output: "export"` — no server required).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # exports ./out and checks its local links/assets
npm run lint       # ESLint (React 19 rules included)
npm start          # preview ./out locally after building
```

The production build is a **fully static site** in `out/` — host it on Vercel, Netlify,
S3, GitHub Pages or any static file server. `npm start` serves the exported files locally;
it does not run the Next.js server.

The canonical origin defaults to `https://ehata-tech.vercel.app`. Set
`NEXT_PUBLIC_SITE_URL` to override it when building for a different production domain.
The canonical origin is used by metadata, JSON-LD, `sitemap.xml` and `robots.txt`.

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
- To use your real files: replace `public/logo.png` (brand logo),
  `public/og-image.png` (social preview), and the favicon copies
  (`src/app/icon.svg`, `src/app/favicon.ico`, `public/icon.svg`).
- Colors/typography are CSS variables in `src/app/globals.css` (`--navy`, `--blue`,
  `--sky`, `--slate`, `--bg`, `--gradient-signature`, radii, glows). Change them once,
  the whole site follows. Dark-mode tokens live in the same file's `.dark` block.

## Contact information and form (no backend)

The confirmed customer contact email is `mnkq2000@gmail.com`. Phone and WhatsApp
numbers are maintained in `src/data/site.ts`. The office address is intentionally
not shown, and social links remain hidden until official profile URLs are provided.

`src/components/sections/contact-form.tsx` supports a hosted Formspree-compatible
endpoint via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. Until one is configured, submitting
the form opens the visitor's email client with a pre-filled message addressed to
the confirmed contact email.

Rebuild after changing env values (`NEXT_PUBLIC_*` is inlined at build time).

## SEO before launch

- The canonical origin defaults to `https://ehata-tech.vercel.app`; override it with
  `NEXT_PUBLIC_SITE_URL` if the production domain changes.
- `public/og-image.png` is the 1200×630 social-sharing image. Blog, service, and
  general pages use it; project case studies use their own project cover.
- Set `GOOGLE_SITE_VERIFICATION` and/or `BING_SITE_VERIFICATION` to the ownership
  verification value provided by Google Search Console or Bing Webmaster Tools.
  Add them to the production environment in Vercel and redeploy; the values are
  emitted as verification metadata only when configured.
- After deployment, verify the site in both webmaster tools and submit
  `https://<your-domain>/sitemap.xml`. Verification metadata does not connect an
  account or provide search-performance data by itself.
- Blog posts are attributed to the EHATA Editorial Team rather than an invented
  individual author. Add named authors and credentials only after they are confirmed.

## Accessibility & performance notes

- Reduced motion: `prefers-reduced-motion` disables Lenis, GSAP timelines, split-text,
  counters and other motion effects. The homepage uses a static brand mark rather than
  a WebGL hero; the 3D scene modules remain available but are not currently mounted.
- Contact-form validation errors are linked to their controls for assistive technology,
  and the form is removed from keyboard navigation while its result panel is shown.
- The portfolio contains 22 selected, source-reviewed projects across web, SaaS,
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

## Launch checklist

- Confirm `NEXT_PUBLIC_SITE_URL` is the production origin before building.
- Configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` if submissions should be sent directly
  from the site; otherwise the form uses the visitor's email client.
- Review the privacy notice against the actual hosting provider, mailbox retention,
  and legal business details before launch.

GitHub Actions runs ESLint and the static export/link check on pushes and pull requests.
```
