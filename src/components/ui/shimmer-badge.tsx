"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShimmerBadgeProps {
  children: ReactNode;
  className?: string;
  dotColor?: "emerald" | "blue" | "sky";
  showDot?: boolean;
}

/**
 * ShimmerBadge — Inspired by Skiper UI & modern Apple/Vercel designs.
 * Pill badge with animated shimmer border and live pulse indicator.
 */
export function ShimmerBadge({
  children,
  className,
  dotColor = "emerald",
  showDot = true,
}: ShimmerBadgeProps) {
  const dotColors = {
    emerald: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]",
    blue: "bg-blue shadow-[0_0_8px_rgba(0,87,231,0.7)]",
    sky: "bg-sky shadow-[0_0_8px_rgba(46,155,255,0.7)]",
  };

  const pingColors = {
    emerald: "bg-emerald-400",
    blue: "bg-blue",
    sky: "bg-sky",
  };

  return (
    <div
      className={cn(
        "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      {/* Animated spinning conic gradient border */}
      <span
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(0,87,231,0.5)_50%,rgba(46,155,255,0.9)_70%,transparent_100%)] opacity-75"
        aria-hidden
      />

      {/* Badge inner container */}
      <span className="relative inline-flex items-center gap-2 rounded-full border border-line/60 bg-surface/90 px-3.5 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
        {showDot && (
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                pingColors[dotColor],
              )}
            />
            <span
              className={cn(
                "relative inline-flex h-2 w-2 rounded-full",
                dotColors[dotColor],
              )}
            />
          </span>
        )}
        <span className="text-muted group-hover:text-foreground transition-colors">
          {children}
        </span>
      </span>
    </div>
  );
}
