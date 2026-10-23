"use client";

import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * BorderBeam — Inspired by Skiper UI & Vengeance UI.
 * A beam of light moving seamlessly along the border of a container.
 */
export function BorderBeam({
  className,
  size = 180,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = "var(--blue)",
  colorTo = "var(--sky)",
}: BorderBeamProps) {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]",
        // Mask to keep only the border
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // The moving beam
        "after:absolute after:aspect-square after:w-[var(--size)] after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        "after:[offset-anchor:calc(var(--size)/2)_calc(var(--size)/2)] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]",
        className,
      )}
      aria-hidden
    />
  );
}
