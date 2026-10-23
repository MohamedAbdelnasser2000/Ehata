"use client";

import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  glowOpacity?: number;
}

/**
 * AuroraBackground — Inspired by Vengeance UI.
 * Creates a fluid, cinematic ambient lighting mesh behind key sections (Hero, CTA).
 */
export function AuroraBackground({
  className,
  glowOpacity = 0.5,
}: AuroraBackgroundProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {/* Primary breathing aurora mesh */}
      <div
        className={cn(
          "absolute -top-[35%] -left-[15%] h-[150%] w-[130%]",
          "opacity-60 mix-blend-screen filter blur-[90px] md:blur-[130px]",
          !reduced && "animate-aurora-drift",
        )}
        style={{
          opacity: glowOpacity,
          background: `
            radial-gradient(ellipse 65% 55% at 50% 25%, rgba(0, 87, 231, 0.28), transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 45%, rgba(46, 155, 255, 0.22), transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 55%, rgba(10, 16, 51, 0.18), transparent 75%)
          `,
        }}
      />

      {/* Secondary ambient pulse orb */}
      <div
        className={cn(
          "absolute top-[10%] right-[5%] h-[400px] w-[400px] rounded-full",
          "bg-sky/20 filter blur-[100px] md:blur-[140px]",
          !reduced && "animate-pulse-glow",
        )}
        style={{ opacity: glowOpacity * 0.8 }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_40%,transparent_100%)]" />
    </div>
  );
}
