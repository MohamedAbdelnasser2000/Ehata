import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section — consistent max width and vertical rhythm for every page band.
 * `tone="dark"` renders the navy sections that use glassmorphism.
 */
export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        tone === "dark" &&
          "bg-navy text-white dark:bg-[#0A1033]",
        tone === "surface" && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  className,
  center = true,
}: {
  kicker?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        center && "items-center text-center",
        className,
      )}
    >
      {kicker}
      {title}
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-[17px] leading-relaxed text-muted",
            center && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
