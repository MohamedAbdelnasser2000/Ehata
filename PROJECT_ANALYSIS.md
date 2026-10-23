# EHATA Portfolio — تحليل كامل وموثّق للموقع (Handoff Document)

> **الغرض من هذا الملف:** وصف هندسي كامل ودقيق لموقع `ehata-portfolio` بحيث يستطيع مودل AI آخر (أو مطوّر جديد) أن يفهم البنية، ويكمل التعديلات دون أن يفسد شيئًا.
> **كل معلومة هنا تم التحقق منها من الكود الفعلي** في `G:/All Projects/portfolio` بتاريخ 2026-10-22، مع ذكر مسار الملف ورقم السطر. إذا تعارض هذا الملف مع الكود، **فالكود هو المرجع**.
> **آخر قياس حقيقي للموقع قبل إضافة صفحات دراسات الحالات:** `npm run lint` = صفر أخطاء، `npm run build` = نجاح، TypeScript = 27.9s، **17/17 صفحة ثابتة** مُولَّدة في `out/`. راجع أوامر التحقق أدناه لنتائج البناء بعد التوسعة.

---

## 0. كيف تستخدم هذا الملف (اقرأ هذا أولًا)

1. ابدأ من **§2 القيود الصارمة** — هذه تعليمات مالك المشروع، وأي تعديل يخالفها مرفوض حتى لو كان تحسينًا.
2. ثم **§6 نموذج البيانات** و**§7 i18n والثيم** — 90% من طلبات "عدّل نص/أضف كورس/غيّر رقم" تتنفَّذ في ملفات البيانات والرسائل فقط، بدون لمس المكوّنات.
3. أي تعديل معماري اقرأ **§5 قيود الـ static export** أولًا؛ هذا المشروع **Next.js 16.4** وليس الإصدار الذي تدربه عليه، وفيه فروق تكسر الكود (انظر §5.4).
4. قبل التسليم: نفّذ **§13 قائمة التحقق** و**§14 أوامر التحقق**.

**مصطلحات ثابتة في هذا الملف:**
- *UI strings* = نصوص الواجهة العامة (أزرار، عناوين، تسميات) → تعيش في `src/messages/*.json`.
- *content* = المحتوى التحريري (كورسات، مشاريع، خدمات) → تعيش في `src/data/*.ts`.
- *LocalizedText* = كائن `{ en, ar }` يُحلّ بواسطة `tr()`.

---

## 1. ملخص تنفيذي

| البند | القيمة |
|---|---|
| المشروع | موقع تعريفي ثنائي اللغة (عربي/إنجليزي + RTL) لشركة برمجيات وأكاديمية تدريب باسم **EHATA** |
| الاسم في `package.json` | `ehata-portfolio` v`0.1.0` (private) |
| الإطار | **Next.js 16.4.2** (App Router) + **React 19.3.0** + TypeScript strict |
| التنسيق | **Tailwind CSS v4** (إعداد بالـ CSS عبر `@theme` و`@utility` — لا وجود لـ `tailwind.config.*`) |
| الحركة | `motion` v14 (`motion/react`) + GSAP 3.15 + ScrollTrigger + Lenis 1.3 |
| الثالث الأبعاد | three 0.186 + `@react-three/fiber` 9.8 + drei 10.7 + postprocessing 3.2 |
| مكوّنات جاهزة | Radix: `react-accordion`، `react-dialog`، `react-slot` |
| النماذج | react-hook-form 7.90 + zod 4.6 |
| الأيقونات | `lucide-react` 1.59 (+ أيقونات العلامات التجارية مرسومة يدويًا — انظر §9.6) |
| نمط النشر | **`output: "export"`** → موقع ملفات ثابتة في `out/`، **بلا سيرفر، بلا Backend، بلا قاعدة بيانات** |
| اللغات | `en` (افتراضي) و`ar` (RTL) — التبديل على العميل فقط، محفوظ في `localStorage` |
| الثيم | فاتح/داكن عبر كلاس `.dark` على `<html>`، محفوظ في `localStorage` |
| عدد الصفحات المصدّرة | 17 (مسارات `app/` + 5 صفحات كورسات SSG + `404`) |
| نظام التحكم بالإصدارات | **لا يوجد مستودع git** (`git status` → `fatal: not a git repository`). لا تتوقع `git diff`؛ قارن يدويًا أو أنشئ مستودع إن سمح المالك |
| اختبارات | **لا يوجد إطار اختبار** في المشروع. التحقق = lint + build + فحص يدوي في المتصفح |

**بنية المشروع بحجمها الفعلي:** 74 ملف مصدري تحت `src/`، إجمالي ~8,467 سطر، وأكبر ملف هو `src/data/courses.ts` بـ 1,603 سطر (بيانات الكورسات الخمسة).

---

## 2. القيود الصارمة (قرارات المالك — لا تُكسر)

هذه قيود صريحة من مالك المشروع، تكررت في أكثر من طلب، وسارية على كل تعديل مستقبلي:

1. **Frontend فقط.** ممنوع: backend، API routes (`src/app/api/**`)، قاعدة بيانات، خادم Node، أي شيء يتطلب `next start` بسلوك ديناميكي. المشروع يُنشر كملفات ثابتة.
2. **كل البيانات في ملفات TypeScript ثابتة** تحت `src/data/` — لا fetch من الإنترنت، لا CMS، لا ملفات JSON ديناميكية وقت التشغيل.
3. **ممنوع تعديل `Navbar`** (`src/components/layout/navbar.tsx`) **أو الأقسام الأخرى** عند إضافة ميزة جديدة. (لهذا السبب تحديدًا `/academy` ليست في القائمة العلوية — انظر §15.2.)
4. **الحفاظ على RTL والخطوط الحالية والوضع الداكن.** أي مكوّن جديد يجب أن يعمل في الحالتين `dir="rtl"` و`dir="ltr"` وفي `.dark`.
5. **رقم واتساب واحد في ملف إعداد** وليس مكررًا في المكوّنات → `src/data/site.ts:40` (`WHATSAPP_NUMBER`).
6. **الأرقام الحالية ملك المالك ولا تُستبدل بأخرى:** واتساب العائم `+201001917782`، وصفحة الاتصال `+20 11 05180133` و`+201001917782` (هاتف وواتساب)، السوشيال = Facebook وInstagram فقط (تم حذف X وYouTube وGitHub بتعليمات صريحة).
7. **المؤشر (cursor) العائم المضيء تم حذفه بتعليمات صريحة** — الموقع يستخدم مؤشر النظام. لا تُعِده. (`src/lib/hooks.ts:78` لا يزال يصدّر `useFinePointer` كبقية غير مستخدمة — انظر §15.5.)
8. **لا تُشغّل `npx tsc --noEmit`** — المالك رفضه صراحة. فحص الأنواع يتم داخل `npm run build` أصلًا («Running TypeScript … Finished TypeScript in 27.9s»).
9. **التصميم الحالي للكروت هو المرجع:** عند إضافة كورسات أو أقسام، أعد استخدام نفس شكل البطاقة (شارة المستوى، الأيقونة أعلى يمين في RTL، العنوان، الوصف، ثلاث نقاط، سطر المدة/المواعيد/المستوى، رابط «تفاصيل الدورة») بنفس المسافات والظلال وhover.

> **قاعدة سلوكية:** المالك يريد **تكافؤًا مع ما هو موجود** لا إعادة تصميم. لو رأيت شيءًا يمكن «تحسينه»، سجّله كملاحظة في §15 ولا تغيّره من تلقاء نفسك.

---

## 3. الإعداد والأوامر

### 3.1 `next.config.ts` (كامل ومهم)

```ts
output: "export",                    // تصدير ثابت — لا سيرفر
images: { unoptimized: true },        // next/image optimization غير متاح في export
trailingSlash: true,                  // /about/index.html بدل /about.html
turbopack: { rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } } },
```

يوجد تعليق صريح في الملف يوضح أن `cacheComponents` / `partialPrefetching` **تم حذفهما عمدًا** لأنهما يستهدفان runtime فيه streaming وهو غير متوافق مع `output: "export"`. لا تُعِدهما.

### 3.2 `tsconfig.json`
`strict: true`، `noEmit: true`، `moduleResolution: "bundler"`، `resolveJsonModule: true` (ضروري لاستيراد `src/messages/*.json`)، `isolatedModules: true`، alias: **`@/*` → `./src/*`**. استخدم `@/` دائمًا في الاستيرادات (هذا نمط ثابت في كل الملفات).

### 3.3 `eslint.config.mjs`
`eslint-config-next/core-web-vitals` + `/typescript`، مع `globalIgnores` لـ `.next/** out/** build/** next-env.d.ts`. نسخة ESLint 9 (flat config). الأوامر: `npm run lint` → `eslint` بدون وسائط.

### 3.4 الأوامر

```bash
npm install
npm run dev      # تطوير على :3000 (Turbopack)
npm run build    # type-check + lint-clean compile + تصدير ثابت إلى ./out
npm run lint     # ESLint
npm start        # غير ذي جدوى فعليًا؛ النشر يتم من ./out
```

**فحص النسخة المُصدَّرة محليًا:**

```bash
python -m http.server 4000 --directory out
```

> **تحذير عملي مُجرَّب:** خادم التطوير والخادم الثابت قد يكون لديهما **نسخ مختلفة من CSS** بعد تعديل `globals.css`. إذا لم تجد قاعدة CSS في `:3000`، تحقق من `out/_next/static/chunks/*.css` قبل أن تقرر أن الكود خاطئ.

### 3.5 البيئة غير مكتملة (اعرفها)
- لا يوجد `.git` ولا `.env.local`. متغيّر واحد فقط مُتوقع وقت البناء: `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (اختياري، انظر §10.5).
- `next.config.ts` يطبع تحذيرًا؟ لا — لكن `AGENTS.md` يُعاد توليده بواسطة `next dev` (انظر §5.4).

---

## 4. خريطة الملفات (ماذا يوجد أين، ولماذا)

```
G:/All Projects/portfolio/
├─ AGENTS.md                 ← يولّده next dev؛ لا تحذف مقطع «This is NOT the Next.js you know»
├─ README.md                 ← دليل التحرير (113 سطر) — فيه فقرات قديمة (انظر §15.5)
├─ next.config.ts            ← export + trailingSlash + turbopack css rule
├─ eslint.config.mjs  tsconfig.json  package.json
├─ public/
│  ├─ logo.png               ← صورة الـ fallback في الهيرو + صورة Open Graph
│  ├─ icon.svg               ← favicon بديل
│  └─ images/projects/             ← أغلفة SVG توضيحية (ليست لقطات شاشة فعلية)
├─ out/                      ← ناتج البناء الثابت (75 صفحة) — لا تحرّره يدويًا
└─ src/
   ├─ app/                   ← التوجيه (App Router)
   │  ├─ (en)/layout.tsx     ← الجذر الإنجليزي + metadata العامة ومكونات الموقع
   │  ├─ ar/layout.tsx       ← الجذر العربي مع lang=ar وdir=rtl في HTML
   │  ├─ (en)/page.tsx       ← الرئيسية: 8 أقسام بالترتيب
   │  ├─ globals.css         ← كل التوكِنز + utilities + keyframes + قواعد RTL/reduced-motion  (330 سطر)
   │  ├─ (en)/about|projects|services|contact/page.tsx ← صفحات ثابتة
   │  ├─ (en)/services/[slug]/page.tsx                ← تفاصيل الخدمات بالإنجليزية (SSG)
   │  ├─ ar/services/[slug]/page.tsx                  ← تفاصيل الخدمات بالعربية (SSG)
   │  ├─ ar/contact/page.tsx                           ← نموذج التواصل العربي
   │  ├─ academy/page.tsx                             ← فهرس الأكاديمية
   │  ├─ academy/[slug]/page.tsx                      ← صفحة الكورس (SSG بـ generateStaticParams)
   │  ├─ sitemap.ts          ← 11 رابط + dynamic="force-static"
   │  ├─ robots.ts           ← dynamic="force-static"
   │  ├─ icon.svg  favicon.ico
   ├─ components/
   │  ├─ providers/          ← LocaleProvider, theme, SmoothScroll(Lenis), PageTransition, SkipLink
   │  ├─ layout/             ← Navbar, Footer, Logo, toggles, SocialIcon, WhatsAppButton, ScrollProgress
   │  ├─ ui/                 ← MagneticButton, TiltCard, Reveal/SplitHeading/Kicker, Section,
   │  │                        Accordion, Modal, AnimatedCounter, Marquee, ProjectCover
   │  ├─ sections/           ← أقسام الصفحات (hero, stats, services-preview, featured, courses-highlight,
   │  │                        marquee, testimonials, cta, about×6, projects-explorer, services×3, contact×2+form)
   │  ├─ academy/            ← 9 مكوّنات للأكاديمية (تفصيلها في §11)
   │  └─ three/              ← hero-scene, mini-scene, e-model, code-symbols
   ├─ data/                  ← كل المحتوى التحريري (types.ts + 12 ملف بيانات)
   ├─ messages/              ← en.json / ar.json — 177 مفتاح ورقي في كل ملف، متطابقان 100%
   └─ lib/                   ← i18n.ts, hooks.ts, utils.ts (cn), icons.tsx (سجل الأيقونات)
```

### 4.1 جدول الملفات المصدّية (اسم الملف → ما يصدّره)

| ملف | سطور | exports |
|---|---|---|
| `src/lib/i18n.ts` | 41 | `locales`, `Locale`, `defaultLocale`, `dictionaries`, `localeLabels`, `dirOf()`, **`LocalizedText`**, `pick()` |
| `src/lib/utils.ts` | 7 | `cn()` (clsx + tailwind-merge) |
| `src/lib/hooks.ts` | 80 | `useMediaQuery`, `useReducedMotion`, `useCanAfford3D`, `useFinePointer` |
| `src/lib/icons.tsx` | 93 | `REGISTRY` (35 أيقونة)، `RegistryIconName`، `Icon({name, className})` مع fallback إلى `Sparkles` |
| `src/data/types.ts` | 144 | `IconName`,`Stat`,`Service`,`ProjectCategory`,`Project`,`CourseLevel`,`CourseModule`,`CourseProject`,`CourseFaqItem`,`Course`,`Testimonial`,`TeamMember`,`Milestone`,`ProcessStep`,`ValueCard`,`PricingModel`,`FaqItem` |
| `src/data/site.ts` | 64 | `NAV_LINKS`,`ContactInfo`,`CONTACT`,`WHATSAPP_NUMBER`,`telHref`,`whatsappHref`,`whatsappChatHref`,`SOCIALS`,`SocialId` |
| `src/data/courses.ts` | 1603 | `COURSES` (سطر 10) — 5 كورسات كاملة، `getCourseBySlug()` (سطر 1601) |
| `src/data/projects.ts` | — | 7 مشاريع، أوصاف ثنائية اللغة ومجالات تنفيذ مستندة إلى ملفات المصدر |
| `src/data/services.ts` | 98 | `SERVICES` (6 خدمات) |
| `src/data/service-details.ts` | — | تفاصيل الجمهور والنطاق والمنهجية والأسئلة الشائعة لكل خدمة |
| `src/data/pricing-faq.ts` | 92 | `PRICING`, `FAQS` |
| `src/data/process.ts` | 85 | `PROCESS`, `VALUES` |
| `src/data/team.ts` | 3 | فارغ حتى إضافة أسماء وسير حقيقية |
| `src/data/timeline.ts` | 3 | فارغ حتى إضافة محطات وتواريخ موثقة |
| `src/data/testimonials.ts` | 3 | فارغ حتى إضافة شهادات حقيقية ومصرح بها |
| `src/data/stats.ts` | — | `STATS` |
| `src/data/tech.ts` | — | `TechItem`, `TECH_STACK` |
| `src/data/about.ts` | 31 | `ABOUT` |

### 4.2 جدول البيانات → المستهلك (lineage)

| ملف بيانات | يقرأه |
|---|---|
| `courses.ts` | `sections/courses-highlight-section.tsx`، `academy/academy-index.tsx`، `app/academy/page.tsx` (غير مباشر)، `app/academy/[slug]/page.tsx`، `app/sitemap.ts` |
| `site.ts` | `layout/navbar.tsx`، `layout/footer.tsx`، `layout/whatsapp-button.tsx`، `sections/contact-sections.tsx`، `academy/enroll-button.tsx` |
| `services.ts` | `sections/services-preview-section.tsx`، `sections/services-sections.tsx`، `components/services/service-detail-page.tsx`، صفحات `/services/[slug]` و`/ar/services/[slug]`، `layout/footer.tsx`، `sections/contact-form.tsx` (قائمة اختيار الخدمة) |
| `projects.ts` | `sections/featured-projects-section.tsx`، `sections/projects-explorer.tsx` |
| `pricing-faq.ts` | `sections/services-sections.tsx` (PricingSection + FaqSection)، صفحة `/contact` تعيد استخدام `FaqSection` |
| `stats.ts` / `tech.ts` / `testimonials.ts` | أقسام الرئيسية المقابلة |
| `about.ts` / `team.ts` / `timeline.ts` / `process.ts` | `sections/about-sections.tsx` (+ `ProcessSection` يستخدم `PROCESS`) |

---

## 5. خريطة المسارات، وكيف يعمل التصدير الثابت

### 5.1 المسارات المُعلَنة وقت البناء (ناتج `npm run build` الفعلي)

```
○ /                  ○ /_not-found       ○ /about
○ /academy           ● /academy/dotnet-fullstack   ● /academy/php-fullstack
● /academy/mobile-apps   ● /academy/artificial-intelligence   ● /academy/software-engineering
○ /contact           ○ /icon.svg         ○ /projects
○ /robots.txt        ○ /services         ○ /sitemap.xml
```
`○` = prerender ثابت، `●` = SSG عبر `generateStaticParams`. المجموع **17 صفحة** (يشمل `out/404`).

### 5.2 روابط الـ URL الحقيقية (بفضل `trailingSlash: true`)
كل مسار ينتهي بـ `/`: `/about/`، `/academy/dotnet-fullstack/`. الملفات الناتجة `out/<path>/index.html`.

### 5.3 ما هو مسموح وما هو ممنوع في `output: "export"`

| ممنوع (يكسر البناء أو لا يعمل) | البديل المستخدم هنا |
|---|---|
| Route Handlers / `src/app/api/**` | نموذج التواصل يرسل `fetch` لنقطة خارجية اختيارية أو `mailto:` fallback |
| Middleware / `cookies()` في الصفحات | التوام والـ locale في `localStorage` فقط |
| `dynamic = "force-dynamic"`، `revalidateTag`، streaming | كل الصفحات ثابتة |
| `next/image` optimizer | `images.unoptimized: true` |
| مسارات ديناميكية بلا `generateStaticParams` | `academy/[slug]` يولّد بارامتراته + `dynamicParams = false` |
| `searchParams` ديناميكية داخل صفحة ثابتة | فلاتر المشاريع تعمل في الذاكرة داخل `ProjectsExplorer` (لا URL state) |

### 5.4 Next 16 — فروق تكسر الكود لو استخدمت معرفة قديمة من إصدار أقدم

- **`params` أصبح Promise.** في `app/academy/[slug]/page.tsx` النموذج الصحيح الموجود فعلًا:
  ```ts
  type CourseRouteProps = { params: Promise<{ slug: string }> };
  const { slug } = await params;   // وليس params.slug مباشرة
  ```
  كذلك `generateMetadata({ params })` يجب أن يكون `async` وينتظر `params`.
- **helpers عامة:** `LayoutProps<"/>` و`PageProps` موجودة كـ globals (انظر `src/app/layout.tsx:76` الذي يستخدم `LayoutProps<"/">`)؛ لا تستورد أنواعًا يدوية إلا للضرورة.
- **قواعد lint أكثر صرامة** في `react-hooks`: لا `setState` مباشر داخل جسم `useEffect`. النمط المعتمد في هذا المشروع هو تأجيلها لإطار رسم:
  ```ts
  const id = window.requestAnimationFrame(() => setSupported(detectWebGL()));
  return () => window.cancelAnimationFrame(id);
  ```
  (موجود في `locale-provider.tsx:47`، `hooks.ts:67`، `navbar.tsx:27`، `theme.tsx`).
- **`AGENTS.md` يعيد `next dev` توليده**: المقطع التحذيري مكتوب بواسطة `node_modules/next/dist/server/lib/generate-agent-files.js`. لا تحذفه من الـ diff.
- قبل أي تعديل على مستوى الإطار، اقرأ `node_modules/next/dist/docs/` (موجود فعليًا في المشروع).

### 5.5 الصفحة الرئيسية: ترتيب الأقسام (`src/app/page.tsx`)
```
HeroSection → IntroStatsSection → ServicesPreviewSection → FeaturedProjectsSection
→ CoursesHighlightSection → TechMarqueeSection → TestimonialsSection → CtaBanner
```
ممنوع تغيير هذا الترتيب أو إزالة قسم بدون تعليمات. `#courses` هو الـ anchor الذي يشير إليه زر الهيرو «دوراتنا» عبر `href="/#courses"`.

---

## 6. نموذج البيانات (Data Layer)

### 6.1 القاعدة الذهبية: `LocalizedText`
كل نص تحريري ثنائي اللغة هو `{ en: string; ar: string }` (`src/lib/i18n.ts:36`). يُحلّ داخل المكوّنات بـ:
```tsx
const { t, tr, locale, dir, setLocale } = useLocale();
<h3>{tr(course.title)}</h3>     // tr = (text: LocalizedText) => string
```
الاستثناءات المقصودة: `Project.title` و`Testimonial.name` و`TeamMember.name` و`Course.tools` **نصوص أحادية** (أسماء علم/منتجات لاتينية) — لا تضعها في `{en,ar}`.

### 6.2 نوع `Course` (الكامل) — `src/data/types.ts:70`
```ts
interface Course {
  id: string; slug: string; icon: IconName; level: CourseLevel;
  title: LocalizedText; shortDescription: LocalizedText; fullDescription: LocalizedText;
  bullets: LocalizedText[];            // 3 — تظهر على الكارت
  duration: LocalizedText; schedule: LocalizedText; hoursTotal: LocalizedText;
  language: LocalizedText; price: LocalizedText; nextBatchDate: LocalizedText;
  outcomes: LocalizedText[];           // 7–8 — شبكة «ماذا ستتعلم»
  requirements: LocalizedText[];       // 4
  audience: LocalizedText[];           // 4
  curriculum: CourseModule[];          // 5–6 وحدات: { title, duration, lessons[] }
  tools: string[];                     // 11–13 — لاتينية كما هي
  projects: CourseProject[];           // 3: { title, description }
  faq: CourseFaqItem[];                // 4–5: { q, a }
}
type CourseLevel = "beginner" | "intermediate" | "advanced";
```

### 6.3 الكورسات الخمسة الحالية (الحقائق المثبتة من `src/data/courses.ts`)

| # | slug | icon | level | المدة | المواعيد | ساعات | الدفعة القادمة |
|---|---|---|---|---|---|---|---|
| 1 | `dotnet-fullstack` | `Server` | intermediate | 20 أسبوعًا | 3 مرات/أسبوع | 240 | نوفمبر 2026 |
| 2 | `php-fullstack` | `Layers` | beginner | 16 أسبوعًا | 3 مرات/أسبوع | 192 | ديسمبر 2026 |
| 3 | `mobile-apps` | `Smartphone` | intermediate | 14 أسبوعًا | مرتان/أسبوع | 112 | ديسمبر 2026 |
| 4 | `artificial-intelligence` | `Brain` | advanced | 12 أسبوعًا | مرتان/أسبوع | 96 | يناير 2027 |
| 5 | `software-engineering` | `Blocks` | intermediate | 10 أسابيع | مرتان/أسبوع | 80 | يناير 2027 |

`id === slug` في كل الكورسات. السعر في الجميع: `{ en: "Available on request", ar: "يُحدد عند التواصل" }`، و`language`: `{ en: "Arabic with English technical terms", ar: "العربية بمصطلحات تقنية إنجليزية" }`.
كل كورس يبدأ من سطر: 12 / 361 / 671 / 979 / 1298.

### 6.4 الأنواع الأخرى (بنفس النمط)
`Stat {value, suffix, labelKey}` (أعداد المحفظة مشتقة من `PROJECTS`) — `Service {id, icon, title, description, features[]}` — `Project {id, title, category, featured, coverImage, status?, summary, caseStudy{overview, problem, solution, features[{title, description}], audience[], architecture}, tech[]}` — تفاصيل الجمهور وسيناريوهات الاستخدام الموجهة للعميل لكل مشروع في `src/data/project-client-guides.ts` — `Testimonial` — `TeamMember` — `Milestone` — `ProcessStep` — `ValueCard` — `PricingModel {…, popular?}` — `FaqItem {q,a}`.

### 6.5 سجل الأيقونات (`src/lib/icons.tsx`)
البيانات تشير للأيقونة **باسم نصي** لتبقى serializable. السجل فيه 35 اسمًا (منها الخمسة المستخدمة في الكورسات: `Blocks, Brain, Layers, Smartphone, Server`) و`Icon()` يسقط بصمت على `Sparkles` لو الاسم غير موجود.
⚠️ **لا تستخدم اسم أيقونة غير مُسجّل**: لن تحصل على خطأ، ستحصل على `Sparkles`. أي أيقونة جديدة تُضاف للاستيراد + لكائن `REGISTRY` (الملف محكوم بـ `satisfies Record<string, LucideIcon>`).

---

## 7. اللغات (i18n) والوضع الداكن (Theme)

### 7.1 لماذا لا يوجد `next-intl` ولا middleware
`src/lib/i18n.ts:1-10` يوضح أن التصدير الثابت لا يملك middleware أو cookies؛ اختيار اللغة للموقع عمومًا محفوظ على العميل والقاموس **مُحزَّم (bundled)** في الحزمة. صفحات دراسات المشاريع لها مسارات ثابتة منفصلة، لذلك تستخدم جذري layout (`app/(en)/layout.tsx` و`app/ar/layout.tsx`) لضمان أن HTML العربي المصدّر نفسه يحمل `lang="ar"` و`dir="rtl"`. **لا تضف `middleware.ts`** — لن يعمل في `output: "export"`.

### 7.2 تدفق الـ locale (خطوة بخطوة)
1. `src/app/(en)/layout.tsx` يطبع `<html lang="en" dir="ltr">`، و`src/app/ar/layout.tsx` يطبع `<html lang="ar" dir="rtl">`؛ كلاهما يستخدم `SiteRootLayout` المشترك.
2. `LocaleProvider` (`src/components/providers/locale-provider.tsx`) يبدأ من `initialLocale` الذي يمرره الجذر، ثم يتعامل مع اختيار اللغة المحفوظ للمسارات العادية.
3. بعد التركيب يقرأ `localStorage["ehata:locale"]` **داخل `requestAnimationFrame`** — هذا مقصود لتجنب خطأ lint `react-hooks/set-state-in-effect` ولمنع hydration mismatch. صفحات تفاصيل المشاريع تثبّت اللغة حسب المسار وتحدّث التخزين.
4. effect ثانٍ يكتب `root.lang` و`root.dir = dirOf(locale)` → كل المستند ينقلب RTL. الانتقال بين جذري اللغة يتطلب تحميل صفحة كاملًا، كما هو متوقع في Next.js عند استخدام multiple root layouts.
5. `setLocale` يحدّث الحالة ويكتب `localStorage` فورًا.
6. القيمة المشتركة: `{ locale, dir, t, setLocale, tr }` عبر `useLocale()`؛ `useLocale()` **يرمي خطأ** لو استُخدم خارج `<LocaleProvider>` (سطر 84).

### 7.3 القاموس — `src/messages/en.json` و`ar.json`
- **177 مفتاح ورقي في كل ملف، متطابقان 100%** (تم قياسها؛ لا مفاتيح زائدة أو ناقصة في أي منهما).
- المجموعات العليا بالترتيب: `meta`, `nav`, `common`, `hero`, `stats`, `servicesPreview`, `featured`, `courses` (+`courses.levels`), `tech`, `testimonials`, `cta`, `about`, `projectsPage` (+`filters`,`modal`), `servicesPage`, `contactPage` (+`form`,`info`), **`academyPage`**, **`coursePage`** (+`quickInfo`), `footer`.
- `ar.json` يُقارَن بالـ cast: `ar: ar as typeof en` (`i18n.ts:23`) — أي **مفتاح ناقص في `ar.json` لن يكسر البناء**، بل سيظهر `undefined` في الواجهة العربية. لذلك أضف المفتاح في الملفين معًا دائمًا.
- استبدال ديناميكي داخل نص: `t.coursePage.whatsappMessage.replace("{course}", tr(courseTitle))` — النمط الوحيد المستخدم لتغيير نص وقت العرض.

### 7.4 كل مفاتيح `coursePage` (25 مفتاحًا) — مرجع صفحة الكورس
`breadcrumbHome`, `breadcrumbAcademy`, `backToAcademy`, `enroll`, `whatsappMessage`, `quickInfo{duration,schedule,level,language,batch,price}`, `outcomesKicker`, `outcomesTitle`, `curriculumKicker`, `curriculumTitle`, `curriculumSubtitle`, `toolsKicker`, `toolsTitle`, `projectsKicker`, `projectsTitle`, `projectsSubtitle`, `requirementsTitle`, `audienceTitle`, `faqKicker`, `faqTitle`, `sidebarTitle`, `sidebarNote`, `finalTitle`, `finalSubtitle`, `finalCta`.
قيم عربية مثبتة: `enroll` = «سجّل الآن»، `finalTitle` = «ابدأ رحلتك مع EHATA»، `finalCta` = «سجّل الآن عبر واتساب»، `breadcrumbHome` = «الرئيسية»، `breadcrumbAcademy` = «الأكاديمية». و`t.courses.enroll` (رابط الكارت) = **«تفاصيل الدورة»**.

### 7.5 الثيم الداكن
- `src/components/providers/theme.tsx`: `ThemeScript()` (سطر 18) سكربت inline بـ `dangerouslySetInnerHTML` يعمل **قبل أول رسم** ويقرأ `localStorage["ehata:theme"]` أو `prefers-color-scheme`.
- الحالة **لا يملكها React**: `useIsDark()` تقرأ عبر `useSyncExternalStore` + `MutationObserver` على كلاس `<html>` (سطر 23-44). هذا نمط متكرر في المشروع — لا تحوّله لـ `useState` + `useEffect`.
- `useThemeToggle()` يكتب الكلاس والـ localStorage مباشرة. `ThemeToggle` يبدل أيقونتي Sun/Moon بـ CSS فقط (`hidden dark:block`) حتى تظهر الحالة قبل JS.
- الوضع الداكن معرّف في CSS بـ `@custom-variant dark (&:where(.dark, .dark *))` (`globals.css:5`) — أي `dark:` utility يعمل لأن الأساس `.dark`.

### 7.6 مفتاحا localStorage (لا تغيّرهما بلا سبب)
| المفتاح | القيم | مالكه |
|---|---|---|
| `ehata:locale` | `"en"` \| `"ar"` | `locale-provider.tsx:39` |
| `ehata:theme` | `"dark"` \| `"light"` | `theme.tsx:15` |

### 7.7 ⚠️ metadata إنجليزية حتمًا (قيد ثابت)
صفحة الكورس ثابتة (SSG) وتُولَّد مرة واحدة، لذا `generateMetadata` يستخدم الحقول الإنجليزية **عمدًا** (`app/academy/[slug]/page.tsx`: `title: course.title.en`). لا توجد لغة في الـ metadata وقت البناء ولا طريقة لتغييرها بدون سيرفر أو بدون بناء نسختين. نفس المنطق في كل صفحات `app/*/page.tsx`. **لا تعدل هذا وتضع `course.title.ar`** — لن «يترجم» الـ metadata تلقائيًا حسب الزائر؛ سيكون ثابتًا ومضلّلًا.

---

## 8. نظام التصميم (Design System)

**المصدر الوحيد للحروف والألوان: `src/app/globals.css` (330 سطر). لا يوجد `tailwind.config.*`** — Tailwind v4 يقرأ من CSS.

### 8.1 التوكنز (`:root` سطر 13، `.dark` سطر 33)

| Token | Light | Dark | الاستخدام |
|---|---|---|---|
| `--navy` | `#0a1033` | نفسه | الأقسام الداكنة والنص الأساسي فاتح |
| `--blue` | `#0057e7` | نفسه | Accent الرئيسي |
| `--sky` | `#2e9bff` | نفسه | طرف التدرّج / التوهّجات |
| `--bg` | `#f7f9fc` | `#060b22` | خلفية الصفحة |
| `--surface` | `#ffffff` | `#0d1434` | الكروت |
| `--surface-2` | `#eef2f9` | `#111a41` | المساحات الغائرة |
| `--foreground` | `#0a1033` | `#eef3fb` | النص |
| `--muted` | `#4d5871` | `#9dabc7` | نص ثانوي (تباين AA) |
| `--line` | `rgba(10,16,51,.12)` | `rgba(238,243,251,.14)` | الحدود |
| `--glass` / `--glass-line` | أبيض 0.7 / كحل | كحلي 0.66 / سماوي 0.18 | الزجاج |
| `--gradient-signature` | `linear-gradient(90deg,#0057e7,#2e9bff)` | — | التدرّج التوقيعي |
| `--glow-blue`, `--shadow-card` | توهّج وظل | نسخة أعمق | |

### 8.2 `@theme inline` (سطر 49) — التوكِنز تتحول لـ utilities
ألوان: `bg-bg`, `bg-surface`, `bg-surface-2`, `text-foreground`, `text-muted`, `border-line`, `text-blue`, `bg-blue`, `text-sky`, `bg-navy`, `text-slate` (+ كل وسائط Tailwind المعتادة `/10`, `/40`).
خطوط: `--font-sans` = Sora، `--font-arabic` = IBM Plex Sans Arabic. **`body` يأخذ Sora، و`[dir="rtl"] body` يستبدله بـ Plex Arabic تلقائيًا (سطر 182)** — لا تفرض خطًا يدويًا.
نصف قطر: **`rounded-card` = `1.25rem`** (البصمة البصرية لكل كارت)، و`rounded-4xl`.
حركات: `animate-marquee`, `animate-float`, `animate-float-slow`, `animate-spin-slow`, `animate-pulse-glow`.

### 8.3 الـ `@utility` المخصّصة (سطر 200-239) — استخدمها ولا تكررها
`bg-gradient-signature` (تدرّج)، `text-gradient` (نص متدرّج)، `glass` (زجاج + blur + حدّ)، `glow-blue`، `card-shadow`، `bg-grid` (شبكة هندسية خلفية).

### 8.4 الـ keyframes (سطر 76-145 و291)
`marquee`, `marquee-rtl`, `accordion-down/up` (تستخدم متغيّر Radix `--radix-accordion-content-height`)، `fade-in/out`, `modal-in`, `float`, `pulse-glow`, `gb-spin` (مع `@property --gb-angle`).
كلاسات يدوية: `.gradient-border` (حدّ متدرّج دوّار عند hover)، `.marquee-mask`، `.no-scrollbar`. طبقة الحبيبات `.noise-layer` أزيلت أثناء تهذيب التصميم.

### 8.5 تقليل الحركة (سطر 318) — عقد ملزم
`@media (prefers-reduced-motion: reduce)` يلغي كل animation/transition. وبالموازاة على مستوى JS: كل مكوّن حركة (`Reveal`, `SplitHeading`, `TiltCard`, `MagneticButton`, `AnimatedCounter`, `SmoothScroll`, `PageTransition`) **يفحص `useReducedMotion()` ويعرض بديلًا ثابتًا**. عنوان الهيرو نفسه ثابت بلا تفكيك كلمات.

### 8.6 عقد RTL (مهم لأي مكوّن جديد)
- استخدم الخصائص المنطقية: `start-*`, `end-*`, `ps-*`, `pe-*`, `ms-*`, `text-start`, `text-end` (مشروع مستخدم في ~30 موضعًا). **لا** تستخدم `left-*`/`right-*` للتخطيط العام.
- الاستثناء المقصود الوحيد: الزر العائم مثبّت فعليًا أسفل-يسار `left-4` (`whatsapp-button.tsx:22`) لأن المالك طلبه فيزاغيًا في اللغتين.
- الأيقونات الاتجاهية تُعكس بـ `rtl:-scale-x-100` (14 استعمالاً): `ArrowUpRight`, `ArrowLeft`, `ChevronRight`. وشريط تقدّم التمرير يستخدم `origin-left rtl:origin-right`.
- الأرقام/الهواتف تُلف بـ `dir="ltr"` داخل النص العربي (`footer.tsx:91`، بطاقات `contact-sections.tsx`).
- ممنوع `w-screen`/`translateX` العشوائي؛ `body { overflow-x: clip }` موجود أصلًا (سطر 178) ولا يُعتمد عليه كحل.

### 8.7 طبقات z-index (منخفضة ← عالية، كلها ثابتة في الكود)
| الطبقة | العنصر | الملف:سطر |
|---|---|---|
| `z-[60]` | شريط التسجيل السفلي على الموبايل | `academy/course-sidebar.tsx:73` |
| `z-[65]` | زر واتساب العائم | `layout/whatsapp-button.tsx:22` |
| `z-[70]` | طبقة الحبيبات (noise) | `app/layout.tsx:101` |
| `z-[75]` | Navbar | `layout/navbar.tsx:48` |
| `z-[76]` | شريط تقدّم التمرير | `layout/scroll-progress.tsx:17` |
| `z-[80]/[81]` | Modal overlay / content | `ui/modal.tsx:29,33` |
| `z-[84]/[85]` | قائمة الموبايل overlay / sheet | `layout/navbar.tsx:101,104` |
| `z-[90]` | رابط التخطّي عند التركيز | `providers/skip-link.tsx:11` |

---

## 9. الطوب الأساسي (UI Primitives) — والمرجع السريع لخصائصها

كلها تحت `src/components/ui/`. **لا تكتب زرًا أو كارتًا من الصفر في قسم جديد؛ استخدم هؤلاء.**

| المكوّن | التوقيع | سلوكه / متى تستخدمه |
|---|---|---|
| `MagneticButton` | `{children, href?, onClick?, variant?: "primary"\|"outline"\|"ghost"\|"onDark", size?: "md"\|"lg", type?, className?, disabled?}` | يجذب المؤشر نحو مركزه (PULL=0.28)؛ ي render `<a target=_blank>` لو `href` بدأ بـ `http(s)`، وإلا `next/link`، وإلا `<button>`. **كل أزرار الـ CTA عبره.** لا يُضاف إليه منطق إرسال. |
| `TiltCard` | `{children, className?, maxTilt?=8}` | إمالة ثلاثية الأبعاد بالمؤشر؛ معطّلة عند reduced-motion. **غلاف كل كارت محتوى.** |
| `Reveal` | `{children, className?, delay?=0, y?=28}` | ظهور عند التمرير (`useInView` مرة واحدة، margin ‎-12%). غلاف كل بلوك يدخل تدريجيًا. |
| `SplitHeading` | `{lines: (string\|ReactNode)[], as?: "h1"\|"h2"\|"h3", className?, lineClassName?}` | عنوان بتفكيك كلمات وحركة stagger. **كل عناوين الأقسام.** |
| `Kicker` | `{children}` | نص علوي صغير بأحرف كبيرة بلون العلامة وخط فاصل بسيط. |
| `Section` | `{children, className?, id?, tone?: "light"\|"dark"\|"surface"}` | شريط بارتفاع `py-20 md:py-28` وحاوية `max-w-7xl px-5 md:px-8`. **أي قسم جديد يبدأ بـ `<Section>`.** |
| `SectionHeading` | `{kicker?, title?, subtitle?, className?, center?=true}` | هيكل عنوان القسم — يوحّد المسافات (`mb-12 md:mb-16`). |
| `AccordionRoot` / `AccordionItem` | Root = Radix Raw؛ Item = `{value: string, question: ReactNode, children}` | الأكورديون الموحد. `question` يقبل JSX كامل (لذلك curriculums تضع المدة pill بداخله). الحركات من `accordion-down/up`. |
| `Modal*` | `ModalRoot`, `ModalTrigger`, `ModalContent({children, className?, labelledBy?, closeLabel})`, `ModalTitle`, `ModalDescription` | نافذة الراديكس المستخدمة في دراسة الحالة. زر الإغلاق في `end-4 top-4`. |
| `AnimatedCounter` | `{value: number, suffix?: string, className?}` | عدّاد عند الظهور؛ يعرض القيمة النهائية فورًا مع reduced-motion. يكتب `textContent` مباشرة (لا re-render). |
| `Marquee` | `{children, className?, duration?=32}` | شريط متحرك نقي CSS بنسخة مكرّرة من الأطفال + pause عند hover. |
| `ProjectCover` | `{...}` من `project-cover.tsx` | يعرض رسم SVG محليًا مع وسم «غلاف توضيحي»؛ هذه الرسوم ليست لقطات شاشة للمنتجات. |
| `cn()` | `src/lib/utils.ts` | `twMerge(clsx(...))` — **كل** مكوّن يقبل `className` يمررها عبر `cn` حتى لا يُلغي المخصّص أساس المكوّن. |

### 9.6 أيقونات العلامات التجارية (`src/components/layout/social-icons.tsx`)
`lucide-react` أزال أيقونات العلامات التجارية، لذا في هذا الملف رسم SVG inline 24×24 بـ `currentColor` ودالة `SocialIcon({id})` (مفاتيح: `facebook`, `instagram`) + `WhatsAppIcon({className})`. **أي شبكة اجتماعية جديدة = أيقونة SVG هنا + عنصر في `SOCIALS`** (`data/site.ts:59`).

### 9.7 طبقة التخطيط (`src/components/layout/`)
- `Navbar` — sticky glass، `usePathname()` للتحديد النشط، قائمة سطح المكتب + Radix Dialog sheet للموبايل، و`LanguageToggle` + `ThemeToggle` + `MagneticButton href="/contact"`. **ممنوع التعديل (قيد §2.3).**
- `Footer` — أربع أعمدة من `NAV_LINKS` + `SERVICES` + `CONTACT` + `SOCIALS`؛ يولّد السنة تلقائيًا.
- `LogoLockup` / `LogoMark` — الشعار SVG inline (أقواس `E` + شريط متدرّج)؛ لا صورة.
- `ScrollProgress` — شريط 3px أعلى الصفحة بـ `useScroll` + `useSpring`.
- `WhatsAppButton` — الزر العائم في كل الصفحات (تفصيله §11.5).

### 9.8 Providers وترتيب التركيب في `app/layout.tsx`
```
<html lang dir suppressHydrationWarning>
  <head><ThemeScript/></head>
  <body class="flex min-h-full flex-col">
    <LocaleProvider>            ← يوفّر القاموس والسياق
      <SmoothScroll>            ← Lenis + GSAP ticker (يتخطى reduced motion)
        <SkipLink/>             ← #main-content
        <ScrollProgress/>
        <Navbar/>
        <main id="main-content" class="flex-1">
          <PageTransition>{children}</PageTransition>   ← AnimatePresence keyed بالـ pathname
        </main>
        <Footer/>
        <WhatsAppButton/>
```
**لا تُدخل مكوّنًا يحتاج `useLocale()` خارج `LocaleProvider`.** `WhatsAppButton` داخل الـ provider لأنه يقرأ `t.common.whatsapp`.

### 9.9 `PageTransition` وحلّ مشكلة `removeChild` (لا تُفسدها)
`providers/page-transition.tsx:31-38`: عند كل تغيّر مسار **يقتل كل ScrollTrigger الحيّة** ثم `ScrollTrigger.refresh()` بعد 450ms. السبب موثّق في التعليق: pin-spacer الذي تصنعه ScrollTrigger يلف عقد يملكها React، ولو حُذف أثناء وجوده يرمي `NotFoundError: removeChild`. أي قسم جديد يستخدم `ScrollTrigger.create` **لازم** ينظّف في cleanup (`return () => st.kill()`). القياس النهائي: أخطاء الكونسول صفر بعد هذا الحل.

---

## 10. الصفحات والأقسام (Inventory)

### 10.1 `/` — الرئيسية
`src/app/page.tsx` بلا `metadata` محلية (ترث إعدادات `layout.tsx`)، ويستدعي أقسام الرئيسية بالترتيب المبيّن في §5.5. قسم الشهادات لا يظهر ما دامت قائمة الشهادات الموثقة فارغة.

| قسم | ملف | بياناته | أهم سلوك |
|---|---|---|---|
| `HeroSection` | `sections/hero-section.tsx` | نصوص `t.hero` | عنوان ثابت، زرا `/projects` و`/#courses`، وعلامة EHATA SVG على لوحة بسيطة؛ لا WebGL أو تدرجات/شبكة خلفية في الهيرو. يصدّر أيضًا `AnchorLink` |
| `IntroStatsSection` | `sections/intro-stats-section.tsx` | `data/stats.ts` + `t.stats` | مقدمة وإحصاءات بتخطيط تحريري فاتح + `AnimatedCounter` |
| `ServicesPreviewSection` | `sections/services-preview-section.tsx` | `data/services.ts` (6 خدمات) | قائمة خدمات مرقمة؛ كل عنصر يفتح صفحة التفاصيل الخاصة به |
| `FeaturedProjectsSection` | `sections/featured-projects-section.tsx` | `data/projects.ts` — 22 مشروعًا، منها **8** بـ `featured: true` | شبكة ثابتة متجاوبة؛ وكل بطاقة تفتح دراسة الحالة الخاصة بالمشروع |
| `CoursesHighlightSection` | `sections/courses-highlight-section.tsx` (29) | `data/courses.ts` | `id="courses"` + `tone="surface"` + `<CoursesGrid courses={COURSES} />` — **بوابة الأكاديمية** |
| `TechMarqueeSection` | `sections/tech-marquee-section.tsx` (43) | `data/tech.ts` | صفّان من `Marquee` (تقسيم نصف-نصف) |
| `TestimonialsSection` | `sections/testimonials-section.tsx` | `data/testimonials.ts` | سلايدر بـ `AnimatePresence`؛ يعيد `null` إلى أن تضاف شهادات حقيقية ومصرح بها |
| `CtaBanner` | `sections/cta-banner.tsx` | نصوص `t.cta` | خلفية كحلية هادئة مع `LogoMark` ثابت، بلا مشهد ثلاثي الأبعاد |

### 10.2 `/about` — محتوى تعريفي + CTA
`about/page.tsx` يستدعي: `AboutHero`, `StoryMissionVision`, `ValuesSection`, `TimelineSection`, `TeamSection`, `ProcessSection` ثم `CtaBanner`. حاليًا يعيد قسما `TimelineSection` و`TeamSection` قيمة `null` لأن تواريخ الفريق والمحطات السابقة كانت بيانات تجريبية غير موثقة؛ تُعاد عند إضافة محتوى حقيقي. البيانات المعروضة: `about.ts`, `process.ts` (`VALUES`,`PROCESS`).

### 10.3 `/projects` — المستكشف ودراسات الحالة
`ProjectsExplorer` (`sections/projects-explorer.tsx`): رقائق تصفية للفئات الموجودة فعليًا + شبكة بحركة `layout` من Motion + روابط مباشرة إلى صفحات دراسات الحالة. كل مشروع يُصدّر في `/projects/[slug]/` و`/ar/projects/[slug]/` عبر `generateStaticParams`؛ وصفحات المحتوى والبيانات الوصفية تُصيّر على الخادم عند البناء. صفحة الدراسة تتضمن شرحاً موجهاً للعميل، المشكلة والحل، الوحدات، سيناريوهات استخدام واقعية، وفئات مستفيدة محددة لكل مشروع من `project-client-guides.ts`. تفاصيل البنية والتقنيات اختيارية ومطوية حتى لا تطغى على احتياجات العميل. تضيف JSON-LD من نوع `WebPage` و`BreadcrumbList` المطابقين للمحتوى المرئي. لا تستخدم FAQ/Product/Article schema لعدم ثبوت الأهلية والبيانات التحريرية المطلوبة. تحتوي المحفظة حالياً على 22 مشروعاً، مع توضيح حالة منصة التجارة متعددة المستأجرين والنماذج البصرية بوضوح.

### 10.4 `/services` — تفاصيل + أسعار + FAQ
`services-sections.tsx`: `ServicesDetailSection` يعرض الخدمات الست؛ زر تفاصيل كل خدمة يفتح `/services/[slug]/` أو `/ar/services/[slug]/`. الصفحة التفصيلية تُولّد ثابتاً من `SERVICES` وتقرأ شرح الجمهور والتحديات والمخرجات والمنهجية والأسئلة من `data/service-details.ts`. الزر الأساسي يفتح WhatsApp برسالة عن الخدمة، والثانوي يفتح نموذج التواصل مع الخدمة محددة مسبقاً في query string. التقنية ليست ظاهرة ضمن محتوى الصفحة؛ تركّز على العملاء ونطاق التعاون، وبيانات التنفيذ تعرض مستقلة بشكل واضح. `PricingSection` من `PRICING`، و`FaqSection` من `FAQS`.

### 10.5 `/contact` — النموذج بلا باك-إند
`contact/page.tsx` و`ar/contact/page.tsx` = `ContactHead` + `ContactMain` + **`FaqSection` المعاد استخدامها من صفحة الخدمات**. يقرأ `ContactForm` قيمة `service` من query string على العميل ليبقى المسار قابلاً للتصدير الثابت، ويتحقق من أن القيمة تخص خدمة معروفة قبل تعبئتها.
`ContactMain` (`contact-sections.tsx:30-139`) يعرض بطاقات: بريد (`mailto:`)، **كلا الرقمين كروابط `tel:`**، **كلا الرقمين كروابط `wa.me`** (من `CONTACT.whatsapp`)، العنوان، مواعيد العمل، ثم صندوق السوشيال (Facebook/Instagram فقط)، وشريط «خريطة» موكد (placeholder) معلّم بالتعليق `Map placeholder band` — استبدله بـ `<iframe>` من Google Maps عند الطلب.
`ContactForm` (`contact-form.tsx`, 330 سطر) — العقد الكامل:
- `useForm` بـ `mode: "onTouched"` + مخطط **zod يُعاد بناؤه لكل لغة** (`useMemo` على `t`) لتظهر رسائل التحقق بالعربي، مع `z.email()`, وتحقّق هاتف بالـ regex `/^[+]?[\d\s\-().]{7,20}$/`، و`message` ≥ 20 حرفًا، و`service` مطلوب.
- الحالات: `idle | sending | sent | mailto | error`.
- إن وُجد `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` → `POST` JSON (مع `locale`)؛ وإلا → **mailto fallback** يفتح عميل البريد بـ subject/body مُرمَّزين ثم `setStatus("mailto")`. أي خطأ شبكة → `error`.
- المتغيّر البيئي يُدمج وقت البناء: **أعد `npm run build` بعد تغييره**، وأعد تشغيل `next dev`.
- `noValidate` على الفورم (التحقق عندنا لا المتصفح).

### 10.6 SEO
`app/sitemap.ts` و`app/robots.ts` يحتاجان `export const dynamic = "force-static"` في التصدير الثابت (موجودان). يضيف sitemap صفحات الخدمات الست مع بدائل `en`/`ar`، وصفحات المشاريع والكورسات. بيانات كل خدمة تشمل Metadata وJSON-LD من نوع `WebPage` و`BreadcrumbList`. النطاق موحد في `src/lib/site-url.ts`؛ اضبط `NEXT_PUBLIC_SITE_URL` إلى origin الإنتاجي قبل النشر لتوليد canonical وOpen Graph وJSON-LD وsitemap وrobots بالنطاق الصحيح. إذا لم يُضبط، تُحذف الروابط المطلقة وخريطة الموقع بدل استخدام نطاق تجريبي.

---

## 11. الأكاديمية (EHATA Academy) — البنية الكاملة

أكبر إضافة حديثة، ومفصّلة هنا لأن أغلب طلبات «كمل التعديل» ستكون عليها. **9 مكوّنات + صفحتان + بيانات.**

### 11.1 تدفق الاستخدام
```
COURSES (data/courses.ts)
  ├─ CoursesHighlightSection  (/)         ─┐
  ├─ AcademyIndexSection      (/academy)   ├→ CoursesGrid → Reveal → CourseCard → Link /academy/[slug]
                                          ─┘
app/academy/[slug]/page.tsx (SSG) → getCourseBySlug → CourseDetail
   CourseDetail = CourseHero + [Outcomes | CourseCurriculum | Tools | Projects | Req/Audience | CourseFaq]
                   + CourseSidebar (sticky desktop / fixed mobile) + CTA نهائي
كل أزرار التسجيل → EnrollButton → whatsappChatHref(رسالة تحتوي اسم الكورس)
```

### 11.2 التوجيه
`src/app/academy/page.tsx` — صفحة ثابتة بـ `metadata` (title "Academy"، canonical `/academy`) تعرض `AcademyIndexSection` (hero بنفس لغة الموقع: `radial-gradient` + `bg-grid` + `Kicker` + `SplitHeading as="h1"` + subtitle من `t.academyPage`) ثم الشبكة.

`src/app/academy/[slug]/page.tsx` — الصفحة الديناميكية الوحيدة في المشروع، والقالب الصحيح لأي مسار جديد مستقبلاً:
```ts
export const dynamicParams = false;                     // أي slug خارج القائمة = 404 وقت البناء
export function generateStaticParams() { return COURSES.map(c => ({ slug: c.slug })); }
type CourseRouteProps = { params: Promise<{ slug: string }> };   // ⚠️ Promise في Next 16
export async function generateMetadata({ params }) { const { slug } = await params; ... }
export default async function CoursePage({ params }) { ...; if (!course) notFound(); return <CourseDetail course={course} />; }
```
النتيجة: 5 صفحات `out/academy/<slug>/index.html`. **أي كورس جديد يضيف صفحة تلقائيًا — لا تعدّل هذا الملف.**

### 11.3 المكوّنات (مسؤولية واحدة لكل منها)

| ملف | سطر | المهمة | نقاط لا تُكسر |
|---|---|---|---|
| `course-card.tsx` | 89 | الكارت المعتمد في الرئيسية و`/academy`. يصدّر **`LEVEL_TONE`** | `TiltCard` ← `<article>` بـ `rounded-card border border-line bg-surface p-6 card-shadow hover:border-blue/40`؛ سطر علوي `justify-between`: لوحة أيقونة `bg-gradient-signature h-11 w-11 rounded-xl` + شارة مستوى؛ 3 نقاط `h-1.5 w-1.5 rounded-full bg-blue`؛ سطر حقائق `Clock/CalendarDays/BarChart3`؛ رابط `/academy/${slug}` بنص `t.courses.enroll` («تفاصيل الدورة») + `ArrowUpRight … rtl:-scale-x-100`. **`key={bullet.en}`** — استخدام `en` كمفتاح مستقر عادة في كل المكوّنات |
| `courses-grid.tsx` | 37 | الشبكة | `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` (3 دِسكتوب / 2 تابلت / 1 موبايل) + `Reveal delay={i*0.06}` لكل كارت |
| `course-hero.tsx` | 186 | بانر + breadcrumb + شريط معلومات سريع | breadcrumb داخل `<nav aria-label="Breadcrumb">`: الرئيسية › الأكاديمية › اسم الكورس (`ChevronRight rtl:-scale-x-100`)؛ أزرار: `EnrollButton` + رجوع لـ`/academy` (`ArrowLeft rtl:-scale-x-100`)؛ لوحة أيقونة كبيرة `hidden` على الموبايل (`glass` + حلقة `animate-spin-slow` + `animate-float-slow`)؛ **شريط 6 خلايا** مبني من مصفوفة `{label, value, icon}`: المدة، المواعيد، المستوى، اللغة، الدفعة القادمة، السعر، بتخطيط `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px bg-line/70` |
| `course-curriculum.tsx` | 62 | الأكورديون | `AccordionRoot type="single" collapsible defaultValue="0"` (أول وحدة مفتوحة)؛ الـ `question` = عنوان + pill المدة `rounded-full bg-blue/10`؛ الدروس بعلامات `Check` خضراء |
| `course-faq.tsx` | 34 | الأسئلة | نفس أكورديون الخدمات بالضبط (اتساق بصري مقصود) |
| `course-sidebar.tsx` | 93 | ملخّص + تسجيل | desktop: `<aside class="hidden lg:block"><div class="sticky top-28 …">` (السعر + شارة المستوى + 4 صفوف + `EnrollButton className="mt-6 w-full"` + `sidebarNote`). mobile: `<div class="course-mobile-bar glass fixed inset-x-0 bottom-0 z-[60] lg:hidden">` فيه السعر + زر تسجيل. **`EnrollButton` الافتراضي `size="lg"`** |
| `course-detail.tsx` | 206 | التركيب | `<div class="pb-28 lg:pb-0">` (مسافة للشريط السفلي) ← `CourseHero` ← `grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16` ← `<article class="min-w-0 flex-col gap-10">` (outcomes شبكة `sm:grid-cols-2` → curriculum → tools chips → projects `sm:grid-cols-2 xl:grid-cols-3` بترقيم `String(i+1).padStart(2,"0")` → requirements/audience `md:grid-cols-2`) ← `CourseSidebar` ← CTA ختامي `bg-navy` بـ `text-gradient` + `EnrollButton variant="onDark"` |
| `enroll-button.tsx` | 44 | **نقطة التسجيل الوحيدة** | يبني الرسالة من `t.coursePage.whatsappMessage` مع `{course}` ← `tr(courseTitle)`، وتمررها لـ `whatsappChatHref()`، داخل `MagneticButton`. الخصائص: `courseTitle: LocalizedText, label?, variant?, size?, className?` |
| `academy-index.tsx` | 44 | فهرس `/academy` | انظر §11.2 |

### 11.4 عقد الـ CSS بين صفحة الكورس والزر العائم (هشّ — لا تُخالفه)
الهدف: شريط التسجيل السفلي على الموبايل لا يغطي زر واتساب ولا الفوتر، **بدون** drilling و**بدون** تعديل Navbar أو الـ layout.
الحل في `globals.css:243-250`:
```css
@media (max-width: 1023px) {
  body:has(.course-mobile-bar) .whatsapp-float { bottom: calc(5.75rem + env(safe-area-inset-bottom)); }
  body:has(.course-mobile-bar) footer { padding-bottom: calc(6rem + env(safe-area-inset-bottom)); }
}
```
**الشرط: أي شريط سفلي جديد يجب أن يحمل كلاس `course-mobile-bar`، وأي تعديل على ارتفاعه يستدعي تحديث هذين الحسابين.** القياس بعد التنفيذ: `floatBottom: 92px` و`footer padding-bottom: 96px` على صفحات الكورس، و`0px` على `/` (لا تراجع).

### 11.5 عقد واتساب (ثلاثة أدوار مختلفة — لا تخلط بينها)
| الاستخدام | المصدر | القيمة |
|---|---|---|
| الزر العائم في كل الصفحات | `WHATSAPP_NUMBER` عبر `whatsappChatHref()` (`whatsapp-button.tsx:15`) | `https://wa.me/201001917782` بدون نص |
| تسجيل الكورسات | نفس الثابت عبر `EnrollButton` | `?text=` + رسالة مُرمَّزة تحتوي اسم الكورس بالعربي أو الإنجليزي حسب اللغة |
| بطاقات صفحة الاتصال | `CONTACT.whatsapp` (مصفوفة) | رقمين، كل واحد رابط `wa.me` مستقل |
`whatsappHref()` يحذف كل غير رقمي (`/\D/g`)، و`telHref()` يبقي الأرقام و`+`. **تغيير رقم التسجيل = سطر واحد في `data/site.ts:40`.**

### 11.6 ألوان المستويات (مصدّرة من `course-card.tsx:16`)
```ts
beginner     → emerald  "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
intermediate → brand    "bg-blue/10 text-blue dark:text-sky"
advanced     → violet   "bg-violet-500/15 text-violet-700 dark:text-violet-300"
```
`LEVEL_TONE` يُستورد من `course-card.tsx` في `course-sidebar.tsx` — **لا تنسخ الأوبجكت**، استورده. والتسميات العربية تأتي من `t.courses.levels[level]` («مبتدئ/متوسط/متقدم»).

---

## 12. الطبقة ثلاثية الأبعاد (`src/components/three/`)

- ملفات Three.js هذه ما زالت موجودة، لكن **لم تعد مركبة في الصفحة الرئيسية أو CTA** بعد تهذيب التصميم؛ لذلك لا يوجد استيراد مشاهد 3D حي في هذه الأقسام حاليًا. إذا أُعيد استخدامها لاحقًا، يجب تحميل الـ Canvas عبر `next/dynamic` مع `ssr: false` داخل Client Component.
- `HeroScene({ scrollRef: RefObject<number>, reduced?: boolean })`: مكوّن متبقٍ غير مستخدم حاليًا؛ `Canvas` بـ `dpr={[1, 1.75]}`، `alpha: true`، `powerPreference: "high-performance"`، `style={{pointerEvents:"none"}}` و`aria-hidden`؛ إضاءة ثلاث نقاط + `EffectComposer multisampling={0}` مع `Bloom intensity 0.9`.
- `e-model.tsx`: نموذج حرف E على شكل أقواس مقذوفة؛ **الهندسة memoized والخوامث ثوابت على مستوى الموديل** حتى لا تُخصَّس مصادر GPU كل رسم. لا تُبسط هذا.
- `code-symbols.tsx`: `CodeSymbols` (شرائح `{ } < / > ;` من canvas texture، بلا خطوط/طلبات شبكة) و`Particles({count = 220})`.
- `MiniScene({ dark = true })`: نسخة خفيفة **بلا postprocessing**؛ غير مستخدمة في CTA الحالي.
- **بوابة الجهد** (`lib/hooks.ts:34-75`): فحص WebGL2/WebGL + `hardwareConcurrency < 4` أو `deviceMemory < 4` → يرفض الثالثي؛ يُخزَّن النتيجة في متغير موديل (فحص مرة واحدة)؛ `useCanAfford3D()` تُعيد `null` حتى يتم الفحص (يبقي الـ hydration سليمًا) و`false` فورًا مع reduced-motion.
- تحذير معروف غير مؤذٍ: `THREE.Clock` deprecation من داخل drei/postprocessing — ليس خطأً من كودنا (§15.4).

---

## 13. وصفات التعديل (Copy-paste recipes)

> نفّذ بالأمر: **أقل تغيير ممكن في أكبر عدد من الملفات الصحيحة**. معظم الطلبات = تعديل بيانات فقط.

### 13.1 إضافة كورس سادس (الطلب الأرجح)
**ملفان فقط، ولا لمس للمكوّنات:**
1. `src/data/courses.ts` — أضف عنصرًا جديدًا داخل مصفوفة `COURSES` بنفس حقول §6.2 (كل النصوص `{en, ar}`). `slug` بصيغة kebab-case و`id === slug`. الأيقونة يجب أن تكون من سجل `lib/icons.tsx` (أو أضفها له).
2. لا شيء آخر: الصفحة تُبنى تلقائيًا من `generateStaticParams`، والرابط يظهر تلقائيًا في `/academy` وفي الرئيسية (كلاهما يمرر `COURSES` كاملة)، و`sitemap.ts` يضيفها تلقائيًا.
3. تحقّق: `npm run build` → يجب أن ترى **6** مسارات `●` تحت `/academy/[slug]` و**12** `<loc>` في `out/sitemap.xml`، والملف `out/academy/<slug>/index.html` موجود.

**لحذف كورس:** احذف عنصره من `COURSES`؛ لا حاجة لتعديل أي ملف آخر (الصفحة تختفي من التوجيه والـ sitemap معًا). لا تترك `getCourseBySlug` بلا مقابل.

### 13.2 تغيير نص داخل كورس (مثل «المدة» أو «الرسوم»)
`src/data/courses.ts` فقط، في الحقل المعني، **في اللغتين معًا**. الحقول الظاهرة على الكارت: `title`, `shortDescription`, `bullets` (3), `duration`, `schedule`, `level`. الظاهرة في التفاصيل: كل شيء عدا `hoursTotal` (انظر §15.6).

### 13.3 تغيير رقم واتساب
سطر واحد: `src/data/site.ts:40` → `WHATSAPP_NUMBER`. يشمل الزر العائم وكل أزرار التسجيل.
ولأرقام صفحة الاتصال: `CONTACT.phones` و`CONTACT.whatsapp` (سطر 28-29) — مصفوفتان منفصلتان عن `WHATSAPP_NUMBER` عن قصد.
الصيغة الحرفية كما هي في الكود: `+201001917782` للـ constant، و`"+20 11 05180133"` مع مسافات داخل مصفوفة الهاتف (الدوال تنظّفها).

### 13.4 إضافة مفتاح UI جديد
**`en.json` و`ar.json` معًا، بنفس المسار بالضبط.** `ar as typeof en` يعني أن النقص لا يفشل البناء بل يطبع `undefined` في العربية. ثم استخدمه `t.<group>.<key>` (أو مع `tr()` لو كان محتوى). لا تكتب نصًا عربيًا/إنجليزيًا حرفيًا داخل JSX إلا للعلامات التجارية.

### 13.5 إضافة قسم جديد لصفحة موجودة
1. نص `t.<newGroup>` في الرسالتين.
2. محتوى اختياري في `src/data/<thing>.ts` + نوع في `types.ts`.
3. مكوّن في `src/components/sections/`: `<Section id="…" tone="light|surface|dark">` + `<SectionHeading kicker={<Kicker>…} title={<SplitHeading lines={[…]} />} subtitle={…} />` + شبكة `Reveal`/`TiltCard`.
4. ضِمن الاستيرادات: `"use client"` أول السطر إذا استخدمت `useLocale()` (وهو ضروري لكل نص).
5. أضفه لصفحة (`app/<route>/page.tsx`) — الصفحاتServer Components ولا تحتاج `"use client"`.
6. تحقّق في اللغتين والوضعين + عرض 360px (لا overflow أفقي).

### 13.6 إضافة مسار/صفحة جديدة (مثال: `/blog`)
انسخ قالب `src/app/academy/[slug]/page.tsx`: `generateStaticParams` + `dynamicParams = false` + `params: Promise<…>` + `notFound()`. لو كانت صفحة ثابتة، انسخ `src/app/academy/page.tsx` (metadata + مكوّن واحد). **ثم** أضف المسار إلى `routes` في `src/app/sitemap.ts`. لو أردت ظهورها في القائمة العلوية أو الفوتر هذا يتطلب تعديل `NAV_LINKS` — **ممنوع بدون إذن صريح** (قيد §2.3)، لكن `NAV_LINKS` نفسه في `src/data/site.ts:8` وليس في الـ Navbar (الفوتر يقرأه مباشرة)؛ عدّله فقط لو طلب المالك صراحة، وستحتاج مفتاح `labelKey` جديدًا في `t.nav` باللغتين.

### 13.7 تغيير الهوية البصرية (ألوان/خطوط/حواف)
كله في `src/app/globals.css`: `:root` (13)، `.dark` (33)، `@theme inline` (49)، الخطوط في `src/app/layout.tsx:16-28` (Sora + IBM Plex Sans Arabic). **لا تُدخل HEX داخل مكوّن** — الاستثناءات الموجودة فعلًا مقصودة: `#25D366` لعلامة واتساب و`rgba(0,87,231,…)` للتوهّجات داخل `style={{…}}`؛ لا تُعمِّمها.
تغيير الخط = تعديل اسم الخط في `layout.tsx` + المتغيّر في `@theme` معًا، مع الحفاظ على أن `--font-arabic` لا يزال يُستخدم تحت `[dir="rtl"]`.

### 13.8 أغلفة المشاريع
الأغلفة الحالية رسوم SVG توضيحية محلية تحت `public/images/projects/`، ويشير إليها `coverImage` في `src/data/projects.ts`. لا تقدّمها على أنها لقطات فعلية للتطبيق. عند توفر صور حقيقية، استخدم لقطات مصرحًا بها ومنقحة من بيانات العملاء أو المرضى، ثم حدّث `coverImage` ونصوص الوصول المناسبة. أوصاف المشاريع تستند إلى الملفات المصدرية التي تمت مراجعتها، وتتجنب افتراض النشر أو النتائج التجارية. تُوسم النماذج البصرية بأنها عروض تفاعلية وليست أنظمة تشغيلية حية.

### 13.9 تشغيل نموذج التواصل فعليًا
`echo NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxx > .env.local` ثم أعد البناء/التشغيل. لا يوجد endpoint = mailto (سلوك افتراضي مقصود، وليس عيبًا).

---

## 14. التحقق (Verification) — افعل هذا بعد أي تعديل

### 14.1 أوامر لا تتنازل عنها
```bash
npm run lint                      # ⚠️ يجب أن يكون صامتًا تمامًا
npm run build                     # type-check + 17 صفحة + out/
```
**لا تشغّل `npx tsc --noEmit`** (مرفوض صراحة من المالك)؛ فحص الأنواع يتم داخل `next build` ويظهر كـ «Running TypeScript / Finished TypeScript».

### 14.2 قياسات الأساس الحالية (المُثبَتة 2026-10-22 — قارن بها بعد تعديلك)
| الفحص | القيمة المتوقعة |
|---|---|
| `npm run lint` | صفر مخرجات، exit 0 |
| `npm run build` | `Compiled successfully` ثم `Finished TypeScript`؛ عدد الصفحات يزيد مع دراسات الحالات المصدّرة بالإنجليزية والعربية |
| جدول المسارات | `/`, `/_not-found`, `/about`, `/academy`, `/academy/[slug]` + 5 أبناء `●`, `/contact`, `/icon.svg`, `/projects`, `/robots.txt`, `/services`, `/sitemap.xml` |
| `out/…/index.html` | `out/`, `out/404`, `out/_not-found`, `out/about`, `out/academy`, `out/academy/<5 slugs>`, `out/contact`, `out/projects`, `out/services` |
| `out/sitemap.xml` | **11** عنصر `<loc>` (6 صفحات عامة + 5 كورسات) |
| `en.json` / `ar.json` | **177** مفتاح ورقي في كل ملف، بلا فروق |
| الكونسول على صفحات الأكاديمية (dev) | 0 أخطاء |

### 14.3 فحص بصري سريع (بلا امتداد خاص إن أمكن)
شغّل `npm run dev` ثم تحقق من: `/` (كارت واحد لكل كورس، 3/2/1 أعمدة)، `/academy/dotnet-fullstack`، و`/academy/software-engineering`.
لكل صفحة: بدّل اللغة والثيم عبر `localStorage.setItem('ehata:locale','ar'); location.reload()` و`localStorage.setItem('ehata:theme','light')`، وافتح أول أكورديون، وقِس شريط الموبايل:
```js
getComputedStyle(document.querySelector('.course-mobile-bar')).height          // موجود فقط < 1024px
getComputedStyle(document.querySelector('.whatsapp-float')).bottom             // 92px على صفحات الكورس، 20px/28px في غيرها
document.documentElement.dir                                                    // 'rtl' مع ar
document.querySelector('body').scrollWidth > innerWidth                        // false = لا overflow أفقي
```
> **تحذير مجرَّب:** لو ظهرت قاعدة CSS مفقودة في `:3000`، افحص `out/_next/static/chunks/*.css` بعد بناء جديد قبل أن تفترض خطأ في الكود؛ خادم التطوير قد يقدّم نسخة قديمة من CSS.

### 14.4 فحص التصدير الثابت
```bash
python -m http.server 4000 --directory out
```
وتأكد أن `/about/`، `/academy/`، `/academy/mobile-apps/` تعود 200. (شكاوى الـ prefetch في §15.1 متوقعة على هذا الخاصر البسيط.)

---

## 15. المعروف والمخاطر (اقرأ قبل أن «تُصلح» شيئًا بالخطأ)

### 15.1 أخطاء 404 للـ RSC prefetch على المضيفات الثابتة البسيطة — **سابق على المشروع، غير مُصلَح عمدًا**
عند تقديم `out/` على خادم ملفات أصلي، تطلب Next روابط مثل `/about/__next.about.__PAGE__.txt` (13–19 خطأ كونسول في القياس). الملفات موجودة فعليًا بصيغة مجلد (`out/about/__next.about/__PAGE__.txt`)، والمشكلة من طريقة حلّ الخادم للمسارات وليس من الكود. **حلّها الحقيقي يتطلب تعديل روابط الـ Navbar (ممنوع)**. على Netlify/Vercel لا تظهر. لا «تُصلحها» بمحو console errors.

### 15.2 `/academy` ليست في القائمة العلوية ولا في الفوتر
`NAV_LINKS` (`src/data/site.ts:8`) فيه home/about/projects/services/contact فقط، والـ Navbar لا يقرأ شيئًا غيره — والوصول للأكاديمية يتم من قسم «دوراتنا» في الرئيسية، ومن breadcrumb/«رجوع للأكاديمية» داخل صفحات الكورسات، ومن الـ sitemap. هذا **نتيجة مباشرة لقيد «لا تغيّر Navbar»** وليس سهوًا. لو طلب المالك رابطًا للقائمة، فالأدنى تدخلًا: عنصر في `NAV_LINKS` + مفتاح `labelKey` في `t.nav` باللغتين (الفوتر سيتبعه تلقائيًا لأنه نفس المصدر) — لكن هذا **يتطلب إذنًا صريحًا** ويُغيّر عرض شريط التنقل (اختبره عند 360px).

### 15.3 الميتاداتا إنجليزية دائمًا (وثيق الصلة بالـ SSG)
انظر §7.7. لو طُلبت SEO عربية: الحلول الممكنة = بناء نسختين من `out/` لكل لغة، أو التخلي عن التصدير الثابت (ممنوع)، أو تجاهل الموضوع. اطلب قرارًا من المالك ولا تقرّر وحدك.

### 15.4 تحذيرات مكتبة third-party (وليست عيوبنا)
`THREE.Clock` deprecation قادمة من drei/postprocessing. لا تُصلحها في `node_modules`، ولا تعتبرها فشل تحقّق.

### 15.5 كود ميت / بقايا — سجّلها ولا تحذفها بدون إذن
- `src/lib/hooks.ts:78` → `useFinePointer()` **غير مستخدمة في أي مكان** (بقايا مؤشر الماوس المحذوف).
- `globals.css:69` و`:84` → `--animate-marquee-rtl` و`@keyframes marquee-rtl` **معرّفان وغير مستخدمين**؛ `Marquee` يمرّر `var(--animate-marquee)` دائمًا (سطر 29) فالاتجاه لا ينعكس في RTL رغم أن تعليق المكوّن يقول غير ذلك. لو طُلبت «إصلاح اتجاه الشريط» فهذه هي النقطة الدقيقة للإصلاح.
- `src/components/ui/` كلها مُستخدمة؛ لا مكوّنات يتيمة فيها.
- **README.md فيه انحراف توثيقي**: سطر الـ providers يقول «custom cursor» وقد حُذف، وهيكل المشروع يذكر `app/` = «/ /about /projects /services /contact» بلا `/academy` و`/academy/[slug]`، وجدول التحرير يقول «Courses → `src/data/courses.ts`» بلا إشارة لصفحات التفاصيل. حدّث README لو طُلب منك توثيق، ولا تعتبره وصفًا صحيحًا راهنًا.

### 15.6 حقول/مفاتيح في البيانات ولا تظهر في الواجهة
- `Course.hoursTotal` (مُعبّأ في كل الكورسات، `types.ts:82`) — **لا يوجد مكوّن يعرضه**. لو طُلب إظهاره، محله الطبيعي شبكة `course-hero.tsx` (ستحتاج سابعًا أو استبدال خلية) مع مفتاح `quickInfo` جديد.
- `t.courses.duration` و`t.courses.level` — مفتاحان يتيمان من شكل الكارت القديم.
- `t.academyPage.coursesCount` — مفتاح معرّف ولا يقرأه `AcademyIndexSection`.
لا تحذفها بصمت: احذفها فقط بطلب، واحذف معها كل مرجع (grep أولًا).

### 15.7 اعتبارات النشر
النطاق `https://ehata.example.com` **placeholder في 3 ملفات**؛ والبريد `hello@ehata.dev` والعنوان «Smart Village, Giza, Egypt» معلنان في الكود بتعليق `TODO` في `src/data/site.ts:25`. روابط `SOCIALS` (`facebook.com/ehata`, `instagram.com/ehata`) **غير موثّقة كحسابات فعلية**. `public/images/projects/` بلا صور (فقط `README.txt`). صورة OG معلنة `1200×630` بينما `public/logo.png` فعليًا **639×632** — اختلاف تجميلي في metadata فقط. لا يوجد مستودع git → **لا نقطة رجوع**: خذ نسخة من `src/` قبل أي تعديل واسع.

---

## 16. قائمة تسليم المهنة (Checklist للمودل القادم)

**قبل أن تلمس شيئًا:**
- [ ] قرأت §2 (القيود) ولن تكسرها — تحديدًا: لا Backend، لا API routes، لا تعديل Navbar/الأقسام، لا `tsc --noEmit`.
- [ ] حددت أن الطلب **بيانات** أم **واجهة** أم **معمار** (انظر §0 وخريطة §4.2).
- [ ] لا يوجد مستودع git → نسخت احتياطية قبل التعديل الواسع.

**أثناء التنفيذ:**
- [ ] كل نص جديد في `src/data/` أو `src/messages/`، وفي `en` و`ar` معًا.
- [ ] `"use client"` أول السطر لأي مكوّن يستخدم `useLocale()` أو حالة/تأثير.
- [ ] الأنماط: `cn()` + خصائص منطقية (`start/end/ps/pe`) + `rtl:-scale-x-100` للأيقونات الاتجاهية + توكِنز جاهزة (`rounded-card`, `bg-surface`, `border-line`, `text-muted`, `card-shadow`, `glass`, `bg-grid`, `bg-gradient-signature`, `text-gradient`).
- [ ] أي حركة جديدة تحترم `useReducedMotion()`، وأي ScrollTrigger يُنظَّف في cleanup.
- [ ] لا استيراد مباشر لمجلد `three/` (استخدم `next/dynamic` + `ssr:false` + default export).
- [ ] لم تضف `middleware.ts`/cookies/Route Handler/`next/image` optimizer، ولم تستخدم `cacheComponents`.
- [ ] في Next 16: `params` هو **Promise** في الصفحات وفي `generateMetadata`.

**قبل أن تقول «تم»:**
- [ ] `npm run lint` صامت و`npm run build` ينجح، وعدد الصفحات كما توقعت (§14.2).
- [ ] تحققت بصريًا في **ar + rtl + dark** و**en + ltr + light** وعلى 360px.
- [ ] فحصت أن أي رابط/زر/رقم واتساب الجديد يفتح القيمة الصحيحة (grep المخرجات في `out/` بدل الافتراض).
- [ ] ذكرت صراحة ما **لم** تستطيع فحصه (مثل Lighthouse أو 404 الـ prefetch على خادم بسيط)، بدل الادعاء أنها سليمة.
- [ ] لا تحسينات غير مطلوبة في الملفات الممنوعة، ولا إعادة تسمية/تنسيق واسعة تُخفي التغيير الحقيقي.

---

## 17. مرجع سريع بالأرقام

| الشيء | المكان |
|---|---|
| رقم واتساب لكل التسجيل | `src/data/site.ts:40` |
| رسالة واتساب الجاهزة | `t.coursePage.whatsappMessage` (في `messages/*.json`) + `academy/enroll-button.tsx` |
| ألوان المستويات | `academy/course-card.tsx:16` (`LEVEL_TONE`) |
| قائمة الكورسات + البحث بالـ slug | `src/data/courses.ts:10` و`:1601` |
| نوع الكورس | `src/data/types.ts:70` |
| روابط القائمة العلوية | `src/data/site.ts:8` |
| عنوان الموقع والخطوط والـ metadata العامة | `src/app/layout.tsx` |
| كل التوكِنز + قواعد RTL/reduced-motion + جسر الشريط السفلي | `src/app/globals.css` (توكِنز 13-74، utilities 200-239، `:has()` 243-250) |
| القاموس (177 مفتاح ورقي ×2) | `src/messages/en.json`, `src/messages/ar.json` |
| سياق اللغة | `src/components/providers/locale-provider.tsx` (`ehata:locale`) |
| سياق الثيم | `src/components/providers/theme.tsx` (`ehata:theme`) |
| بوابة الثالثي الأبعاد | `src/lib/hooks.ts` (`useCanAfford3D`) |
| سجل أسماء الأيقونات | `src/lib/icons.tsx` |
| قيود التصدير الثابت | `next.config.ts` + هذا الملف §5 |
| التوجيه الديناميكي الوحيد | `src/app/academy/[slug]/page.tsx` |
| روابط الـ SEO | `src/app/sitemap.ts` (11 مدخلًا حاليًا), `src/app/robots.ts` |
