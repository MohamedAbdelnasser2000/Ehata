"use client";

/** /academy index — same hero language as the site, one card per track. */
import { Sparkles } from "lucide-react";
import { CoursesGrid } from "@/components/academy/courses-grid";
import { useLocale } from "@/components/providers/locale-provider";
import { SplitHeading } from "@/components/ui/reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";
import { COURSES } from "@/data/courses";

export function AcademyIndexSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Vengeance UI Aurora Background */}
      <AuroraBackground glowOpacity={0.45} />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <ShimmerBadge dotColor="sky">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-blue" aria-hidden />
              {t.academyPage.kicker}
            </span>
          </ShimmerBadge>
          <SplitHeading
            as="h1"
            lines={[t.academyPage.title]}
            className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          />
          <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
            {t.academyPage.subtitle}
          </p>
        </div>

        <CoursesGrid courses={COURSES} className="mt-14 md:mt-16" />
      </div>
    </section>
  );
}
