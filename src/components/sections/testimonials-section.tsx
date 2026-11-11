"use client";

/** Testimonials slider — AnimatePresence crossfade, keyboard-operable, with SpotlightCard. */
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Kicker, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { getLocalizedSitePath } from "@/lib/localized-site-path";

export function TestimonialsSection() {
  const { t, tr, dir, locale } = useLocale();
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    [],
  );

  const current = TESTIMONIALS[index];

  return (
    <Section id="testimonials">
      <SectionHeading
        kicker={<Kicker>{t.testimonials.kicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.testimonials.title]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
      />

      {TESTIMONIALS.length === 0 ? (
        <SpotlightCard className="relative mx-auto max-w-3xl rounded-3xl border border-line/80 bg-surface/90 p-8 backdrop-blur-md sm:p-12">
          <Quote className="absolute end-8 top-8 h-12 w-12 text-blue/15" aria-hidden />
          <p className="max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
            {tr({
              en: "We work directly with business leaders on mission-critical workflows. We never publish unverified reviews; client references and detailed project walk-throughs are available upon request during our scoping session.",
              ar: "نعمل مباشرة مع أصحاب الأعمال على أنظمة تشغيلية حساسة. لا ننشر تقييمات مجهولة أو غير موثقة؛ مراجع الأعمال السابقة وسجلات المشاريع المتاحة نناقشها معك بكل شفافية خلال جلسة تحديد النطاق.",
            })}
          </p>
          <Link
            href={getLocalizedSitePath("/contact/", locale)}
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,87,231,0.65)] transition-transform hover:-translate-y-0.5"
          >
            {tr({
              en: "Book a scoping session",
              ar: "احجز جلسة استكشاف",
            })}
          </Link>
        </SpotlightCard>
      ) : current ? (
        <div
          className="relative mx-auto max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.testimonials.title}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(index + (dir === "rtl" ? -1 : 1));
            if (e.key === "ArrowLeft") go(index + (dir === "rtl" ? 1 : -1));
          }}
        >
          <SpotlightCard
            spotlightColor="rgba(0, 87, 231, 0.12)"
            className="relative min-h-[280px] overflow-hidden rounded-3xl border border-line/80 bg-surface/90 p-8 backdrop-blur-md sm:p-12"
          >
            <Quote className="absolute end-8 top-8 h-12 w-12 text-blue/15" aria-hidden />
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={current.id}
                initial={{ opacity: 0, x: dir === "rtl" ? -32 : 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir === "rtl" ? 32 : -32 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
                  “{tr(current.quote)}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="bg-gradient-signature grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white shadow-sm">
                    {current.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">
                      {current.name}
                    </span>
                    <span className="block text-sm text-muted">
                      {tr(current.role)} · {tr(current.company)}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">
              {index + 1} / {TESTIMONIALS.length}
            </span>
          </SpotlightCard>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label={t.testimonials.prev}
              onClick={() => go(index - (dir === "rtl" ? -1 : 1))}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:border-blue/50 hover:bg-blue/5 hover:text-blue"
            >
              <ChevronLeft className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label={t.testimonials.title}>
              {TESTIMONIALS.map((tm, i) => (
              <button
                key={tm.id}
                type="button"
                role="tab"
                aria-selected={index === i}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  index === i
                    ? "bg-gradient-signature w-8 shadow-[0_0_8px_rgba(0,87,231,0.5)]"
                    : "w-2.5 bg-line hover:bg-muted",
                )}
              />
              ))}
            </div>

            <button
              type="button"
              aria-label={t.testimonials.next}
              onClick={() => go(index + (dir === "rtl" ? -1 : 1))}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:border-blue/50 hover:bg-blue/5 hover:text-blue"
            >
              <ChevronRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
