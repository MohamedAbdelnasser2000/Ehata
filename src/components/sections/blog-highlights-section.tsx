"use client";

import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { BLOG_POSTS } from "@/data/blog";
import { getBlogIndexPath, getBlogPostPath } from "@/lib/blog-routes";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const FEATURED_POST_SLUGS = new Set([
  "choosing-erp-for-your-business",
  "warehouse-and-delivery-operations",
  "flutter-mobile-app-business-checklist",
]);

export function BlogHighlightsSection() {
  const { t, tr, locale } = useLocale();
  const featuredPosts = BLOG_POSTS.filter((post) =>
    FEATURED_POST_SLUGS.has(post.slug),
  );

  return (
    <Section tone="surface">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
        <Reveal>
          <Kicker>{t.blogHighlights.kicker}</Kicker>
          <SplitHeading
            lines={[t.blogHighlights.title]}
            className="mt-4 text-3xl font-bold sm:text-4xl"
          />
          <p className="mt-4 max-w-xl text-[17px] text-muted">
            {t.blogHighlights.subtitle}
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.05}>
            <SpotlightCard className="flex h-full flex-col rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue/10 px-3 py-1.5 text-xs font-semibold text-blue">
                  {tr(post.category)}
                </span>
                <BookOpen className="h-5 w-5 text-muted/70" aria-hidden />
              </div>

              <h3 className="text-xl font-bold leading-snug text-foreground">
                <Link
                  href={getBlogPostPath(post.slug, locale)}
                  className="rounded-sm outline-none transition-colors hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
                >
                  {tr(post.title)}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {tr(post.excerpt)}
              </p>

              <div className="mt-6 flex items-center gap-1.5 border-t border-line/60 pt-4 text-xs text-muted">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {t.blogHighlights.readingTime.replace(
                  "{minutes}",
                  String(post.readingMinutes),
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <Link
          href={getBlogIndexPath(locale)}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-14px_rgba(0,87,231,.65)] transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {t.blogHighlights.viewAll}
          <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
