import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, BookOpen, Clock3 } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import { BLOG_POSTS } from "@/data/blog";
import { getBlogPostPath } from "@/lib/blog-routes";
import { Section } from "@/components/ui/section";

const COPY = {
  en: {
    kicker: "EHATA Journal",
    title: "Practical thinking for better digital decisions",
    subtitle:
      "Guides for teams planning business systems, warehouse workflows, and mobile products. Clear considerations, without inflated promises.",
    home: "Home",
    blog: "Blog",
    read: "Read article",
    published: "Published",
    readingTime: "{minutes} min read",
    ctaTitle: "Have a project in mind?",
    ctaDescription:
      "Tell us about the workflow you want to improve. We will help you define a sensible next step.",
    cta: "Talk to EHATA",
  },
  ar: {
    kicker: "مدونة EHATA",
    title: "أفكار عملية لقرارات رقمية أفضل",
    subtitle:
      "أدلة للفرق التي تخطط لأنظمة الأعمال وإجراءات المخازن ومنتجات الموبايل، بتوضيح عملي بعيدًا عن الوعود المبالغ فيها.",
    home: "الرئيسية",
    blog: "المدونة",
    read: "اقرأ المقال",
    published: "تاريخ النشر",
    readingTime: "قراءة خلال {minutes} دقائق",
    ctaTitle: "لديك مشروع تعمل عليه؟",
    ctaDescription:
      "أخبرنا عن الإجراء الذي تريد تحسينه، وسنساعدك على تحديد الخطوة المناسبة.",
    cta: "تواصل مع EHATA",
  },
} as const;

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function BlogIndex({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  return (
    <>
      <Section className="!pb-12 !pt-32 md:!pt-40">
        <nav aria-label={copy.blog} className="mb-8 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-blue">
            {copy.home}
          </Link>
          <span className="px-2" aria-hidden="true">/</span>
          <span aria-current="page" className="font-medium text-foreground">
            {copy.blog}
          </span>
        </nav>

        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-blue">
            <span className="h-px w-8 bg-blue" aria-hidden="true" />
            {copy.kicker}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {copy.subtitle}
          </p>
        </header>
      </Section>

      <Section className="!py-8 md:!py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-blue/40 sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
                  {pick(locale, post.category)}
                </span>
                <BookOpen className="h-5 w-5 text-muted/70" aria-hidden="true" />
              </div>

              <h2 className="text-xl font-bold leading-snug text-foreground">
                <Link
                  href={getBlogPostPath(post.slug, locale)}
                  className="rounded-sm outline-none transition-colors hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
                >
                  {pick(locale, post.title)}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {pick(locale, post.excerpt)}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-xs text-muted">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt, locale)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.readingTime.replace(
                    "{minutes}",
                    String(post.readingMinutes),
                  )}
                </span>
              </div>
              <Link
                href={getBlogPostPath(post.slug, locale)}
                className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full text-sm font-semibold text-blue outline-none transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-blue"
              >
                {copy.read}
                {locale === "ar" ? (
                  <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
                )}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-10 !pb-24 md:!pb-32">
        <div className="rounded-3xl bg-navy px-6 py-10 text-center text-white sm:px-10 sm:py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {copy.ctaDescription}
          </p>
          <Link
            href={locale === "ar" ? "/ar/contact/" : "/contact/"}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue hover:text-white"
          >
            {copy.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}
