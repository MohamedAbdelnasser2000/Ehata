import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Clock3, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import { BLOG_POSTS, type BlogPost } from "@/data/blog";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { getBlogIndexPath, getBlogPostPath } from "@/lib/blog-routes";
import { getProjectPath } from "@/lib/project-routes";
import { getServicePath } from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site-url";
import { Section } from "@/components/ui/section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";
import { BorderBeam } from "@/components/ui/border-beam";

const COPY = {
  en: {
    home: "Home",
    blog: "Blog",
    published: "Published",
    readingTime: "{minutes} min read",
    author: "EHATA",
    relatedService: "Explore the related service",
    relatedProject: "See a related project",
    faq: "Frequently asked questions",
    sources: "Sources and further reading",
    relatedArticles: "Related articles",
    ctaTitle: "Want to discuss this for your business?",
    ctaDescription:
      "Share your workflow and requirements with our team. We can help you scope a practical next step.",
    cta: "Discuss your project",
    back: "Back to all articles",
    breadcrumb: "Breadcrumb",
  },
  ar: {
    home: "الرئيسية",
    blog: "المدونة",
    published: "تاريخ النشر",
    readingTime: "قراءة خلال {minutes} دقائق",
    author: "EHATA",
    relatedService: "استكشف الخدمة المرتبطة",
    relatedProject: "اطّلع على مشروع ذي صلة",
    faq: "أسئلة شائعة",
    sources: "مصادر ومراجع إضافية",
    relatedArticles: "مقالات ذات صلة",
    ctaTitle: "هل تريد مناقشة هذا الحل لنشاطك؟",
    ctaDescription:
      "شاركنا سير العمل واحتياجاتك، وسنساعدك على تحديد خطوة عملية مناسبة.",
    cta: "ناقش مشروعك",
    back: "العودة إلى جميع المقالات",
    breadcrumb: "مسار التنقل",
  },
} as const;

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function BlogArticlePage({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const copy = COPY[locale];
  const path = getBlogPostPath(post.slug, locale);
  const canonicalUrl = `${SITE_URL}${path}`;
  const blogPath = getBlogIndexPath(locale);
  const service = SERVICES.find((item) => item.id === post.serviceId);
  const servicePath = getServicePath(post.serviceId, locale);
  const project = post.relatedProjectId
    ? PROJECTS.find((item) => item.id === post.relatedProjectId)
    : undefined;
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category.en === post.category.en) -
        Number(a.category.en === post.category.en),
    )
    .slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: copy.home, item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.blog,
            item: `${SITE_URL}${blogPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title[locale],
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        headline: post.title[locale],
        description: post.excerpt[locale],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        inLanguage: locale,
        articleSection: post.category[locale],
        author: {
          "@type": "Organization",
          name: "EHATA",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "EHATA",
          url: SITE_URL,
        },
        ...(post.sources?.length
          ? { citation: post.sources.map((source) => source.url) }
          : {}),
      },
      ...(post.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${canonicalUrl}#faq`,
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question[locale],
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer[locale],
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <Section className="relative !pb-16 !pt-32 md:!pt-40">
        <AuroraBackground glowOpacity={0.3} />

        <article className="mx-auto max-w-3xl">
          {/* ── Breadcrumb ───────────────────────────── */}
          <nav aria-label={copy.breadcrumb} className="mb-8 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-blue">
              {copy.home}
            </Link>
            <span className="px-2" aria-hidden="true">/</span>
            <Link href={blogPath} className="transition-colors hover:text-blue">
              {copy.blog}
            </Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span aria-current="page" className="font-medium text-foreground">
              {post.title[locale]}
            </span>
          </nav>

          {/* ── Article header ───────────────────────── */}
          <header className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
            <BorderBeam duration={12} size={200} />

            <div className="mb-5">
              <ShimmerBadge dotColor="blue" showDot={false}>
                {post.category[locale]}
              </ShimmerBadge>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              {post.title[locale]}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {post.excerpt[locale]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line/60 pt-5 text-sm text-muted">
              <span className="font-medium text-foreground">{copy.author}</span>
              <time dateTime={post.publishedAt}>
                {copy.published}: {formatDate(post.publishedAt, locale)}
              </time>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {copy.readingTime.replace(
                  "{minutes}",
                  String(post.readingMinutes),
                )}
              </span>
            </div>
          </header>

          {/* ── Article body ─────────────────────────── */}
          <div className="prose-content pt-10">
            {post.sections.map((section, index) => (
              <section
                key={`${post.slug}-${index}`}
                className="mb-10 last:mb-0"
              >
                {/* Section heading with left accent bar */}
                <h2 className="mb-4 flex items-start gap-3 text-2xl font-bold leading-snug text-foreground">
                  <span
                    className="mt-1 inline-block h-6 w-1 shrink-0 rounded-full bg-blue"
                    aria-hidden="true"
                  />
                  {pick(locale, section.heading)}
                </h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${post.slug}-${index}-${paragraphIndex}`}
                    className="mb-4 text-base leading-8 text-muted last:mb-0"
                  >
                    {pick(locale, paragraph)}
                  </p>
                ))}

                {section.comparison && (
                  <div className="mt-6 overflow-hidden overflow-x-auto rounded-2xl border border-line/80 bg-surface/85 backdrop-blur-sm">
                    <table className="w-full min-w-[36rem] border-collapse text-start text-sm">
                      <thead className="bg-surface-2 text-foreground">
                        <tr>
                          {section.comparison.headers.map((header, headerIndex) => (
                            <th
                              key={`${post.slug}-${index}-header-${headerIndex}`}
                              scope="col"
                              className="border-b border-line px-4 py-3 font-semibold"
                            >
                              {pick(locale, header)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.comparison.rows.map((row, rowIndex) => (
                          <tr
                            key={`${post.slug}-${index}-row-${rowIndex}`}
                            className="align-top odd:bg-surface even:bg-surface-2/40"
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${post.slug}-${index}-${rowIndex}-${cellIndex}`}
                                className="border-b border-line px-4 py-3 leading-6 text-muted last:border-b-0"
                              >
                                {pick(locale, cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-2.5 ps-0 text-base leading-7 text-muted">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={`${post.slug}-${index}-bullet-${bulletIndex}`}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                          aria-hidden="true"
                        />
                        {pick(locale, bullet)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* ── FAQ ──────────────────────────────────── */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12" aria-labelledby="article-faq">
              <h2
                id="article-faq"
                className="mb-6 text-2xl font-bold text-foreground"
              >
                {copy.faq}
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <SpotlightCard
                    key={`${post.slug}-faq-${index}`}
                    className="rounded-2xl border-line/80 bg-surface/85 backdrop-blur-sm"
                  >
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-7 text-foreground">
                        {pick(locale, faq.question)}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {pick(locale, faq.answer)}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </section>
          )}

          {/* ── Sources ──────────────────────────────── */}
          {post.sources && post.sources.length > 0 && (
            <section className="mt-10" aria-labelledby="article-sources">
              <h2
                id="article-sources"
                className="mb-4 text-xl font-bold text-foreground"
              >
                {copy.sources}
              </h2>
              <ul className="space-y-2 text-sm leading-7">
                {post.sources.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span
                      className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                      aria-hidden="true"
                    />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline decoration-blue/40 underline-offset-4 transition-colors hover:decoration-blue"
                    >
                      {pick(locale, source.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Related service / project aside ──────── */}
          <SpotlightCard className="relative mt-10 rounded-2xl border-line/80 bg-surface/85 backdrop-blur-sm">
            <BorderBeam duration={14} size={160} />
            <div className="flex flex-col items-start gap-2 p-5 sm:p-6">
              <Link
                href={servicePath}
                className="group/link inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue transition-colors hover:text-navy"
              >
                {copy.relatedService}: {service ? pick(locale, service.title) : ""}
                {locale === "ar" ? (
                  <ArrowUpLeft
                    className="h-4 w-4 transition-transform group-hover/link:-translate-x-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                )}
              </Link>
              {project && post.relatedProjectId && (
                <Link
                  href={getProjectPath(post.relatedProjectId, locale)}
                  className="group/link inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue transition-colors hover:text-navy"
                >
                  {copy.relatedProject}: {pick(locale, project.title)}
                  {locale === "ar" ? (
                    <ArrowUpLeft
                      className="h-4 w-4 transition-transform group-hover/link:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              )}
            </div>
          </SpotlightCard>

          {/* ── Related articles ─────────────────────── */}
          {relatedPosts.length > 0 && (
            <section className="mt-10" aria-labelledby="related-articles">
              <h2
                id="related-articles"
                className="mb-5 text-xl font-bold text-foreground"
              >
                {copy.relatedArticles}
              </h2>
              <ul className="space-y-3">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.slug}>
                    <SpotlightCard className="rounded-xl border-line/80 bg-surface/85 backdrop-blur-sm">
                      <Link
                        href={getBlogPostPath(relatedPost.slug, locale)}
                        className="group/link flex items-center justify-between gap-3 p-4"
                      >
                        <span className="font-medium leading-7 text-foreground transition-colors group-hover/link:text-blue">
                          {pick(locale, relatedPost.title)}
                        </span>
                        {locale === "ar" ? (
                          <ArrowUpLeft
                            className="h-4 w-4 shrink-0 text-muted transition-transform group-hover/link:-translate-x-0.5 group-hover/link:text-blue"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-blue"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── CTA ──────────────────────────────────── */}
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white sm:px-10 sm:py-12">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 20%, rgba(0,87,231,0.30), transparent 70%), radial-gradient(ellipse 50% 45% at 80% 80%, rgba(46,155,255,0.18), transparent 65%)",
              }}
            />
            <BorderBeam duration={10} colorFrom="rgba(46,155,255,0.8)" colorTo="rgba(0,87,231,0.6)" />

            <h2 className="bg-gradient-to-br from-white via-white/95 to-white/70 bg-clip-text text-2xl font-bold text-transparent">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {copy.ctaDescription}
            </p>
            <Link
              href={
                locale === "ar"
                  ? `/ar/contact/?service=${encodeURIComponent(post.serviceId)}`
                  : `/contact/?service=${encodeURIComponent(post.serviceId)}`
              }
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy transition-all hover:bg-blue hover:text-white hover:shadow-[0_0_24px_rgba(0,87,231,0.5)]"
            >
              {copy.cta}
            </Link>
          </div>

          {/* ── Back link ────────────────────────────── */}
          <Link
            href={blogPath}
            className="group/back mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-blue"
          >
            {locale === "ar" ? (
              <ArrowUpLeft
                className="h-4 w-4 transition-transform group-hover/back:-translate-x-0.5"
                aria-hidden="true"
              />
            ) : (
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover/back:-translate-x-0.5"
                aria-hidden="true"
              />
            )}
            {copy.back}
          </Link>
        </article>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
    </>
  );
}
