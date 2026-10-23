import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Clock3 } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import type { BlogPost } from "@/data/blog";
import { SERVICES } from "@/data/services";
import { getBlogIndexPath, getBlogPostPath } from "@/lib/blog-routes";
import { getServicePath } from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site-url";
import { Section } from "@/components/ui/section";

const COPY = {
  en: {
    home: "Home",
    blog: "Blog",
    published: "Published",
    readingTime: "{minutes} min read",
    author: "EHATA",
    relatedService: "Explore the related service",
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
      },
    ],
  };

  return (
    <>
      <Section className="!pb-16 !pt-32 md:!pt-40">
        <article className="mx-auto max-w-3xl">
          <nav aria-label={copy.breadcrumb} className="mb-8 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-blue">
              {copy.home}
            </Link>
            <span className="px-2" aria-hidden="true">/</span>
            <Link
              href={blogPath}
              className="transition-colors hover:text-blue"
            >
              {copy.blog}
            </Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span aria-current="page" className="font-medium text-foreground">
              {post.title[locale]}
            </span>
          </nav>

          <header className="border-b border-line pb-8">
            <span className="inline-flex rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
              {post.category[locale]}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              {post.title[locale]}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {post.excerpt[locale]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>{copy.author}</span>
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

          <div className="prose-content pt-8">
            {post.sections.map((section, index) => (
              <section
                key={`${post.slug}-${index}`}
                className="mb-10 last:mb-0"
              >
                <h2 className="mb-4 text-2xl font-bold leading-snug text-foreground">
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
                {section.bullets && (
                  <ul className="mt-5 list-disc space-y-2.5 ps-6 text-base leading-7 text-muted marker:text-blue">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={`${post.slug}-${index}-bullet-${bulletIndex}`}>
                        {pick(locale, bullet)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <Link
              href={servicePath}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue transition-colors hover:text-navy"
            >
              {copy.relatedService}: {service ? pick(locale, service.title) : ""}
              {locale === "ar" ? (
                <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
              )}
            </Link>
          </aside>

          <section className="mt-10 rounded-3xl bg-navy px-6 py-9 text-white sm:px-9 sm:py-11">
            <h2 className="text-2xl font-bold">{copy.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              {copy.ctaDescription}
            </p>
            <Link
              href={
                locale === "ar"
                  ? `/ar/contact/?service=${encodeURIComponent(post.serviceId)}`
                  : `/contact/?service=${encodeURIComponent(post.serviceId)}`
              }
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue hover:text-white"
            >
              {copy.cta}
            </Link>
          </section>

          <Link
            href={blogPath}
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-blue"
          >
            {locale === "ar" ? (
              <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
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
