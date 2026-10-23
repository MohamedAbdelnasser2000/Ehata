"use client";

/**
 * Marquee — pure-CSS infinite track (duplicated children). Direction flips
 * with document RTL; animation is disabled globally by reduced-motion CSS.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  duration = 32,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("marquee-mask group overflow-hidden", className)}
      role="presentation"
    >
      {/* Two identical tracks; the animation shifts by -50% of the pair. */}
      <div
        className="flex w-max"
        style={{
          animation: reverse
            ? "var(--animate-marquee-rtl)"
            : "var(--animate-marquee)",
          animationDuration: `${duration}s`,
        }}
      >
        <div className="marquee-group flex shrink-0 items-center">{children}</div>
        <div className="marquee-group flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
