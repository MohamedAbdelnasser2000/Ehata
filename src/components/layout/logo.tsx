"use client";

/**
 * EHATA brand lockup: the bracket "E" mark (two interlocking rounded
 * brackets + signature gradient bar) and the wide geometric wordmark.
 * The mark is inline SVG so it inherits theme colors; swap `LogoMark` for
 * <Image src="/logo.png"> if you prefer the raster file (see README).
 */
import { useId } from "react";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  withBar = true,
}: {
  className?: string;
  withBar?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const grad = `ehata-bar-${uid}`;
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="EHATA"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--sky)" />
        </linearGradient>
      </defs>
      <path
        d="M34 10 H22 a8 8 0 0 0 -8 8 V46 a8 8 0 0 0 8 8 H34"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M40 18 H46 a6 6 0 0 1 6 6 V40 a6 6 0 0 1 -6 6 H40"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.72"
      />
      {withBar && (
        <rect x="18" y="27" width="28" height="10" rx="5" fill={`url(#${grad})`} />
      )}
    </svg>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3 text-navy dark:text-white", className)}>
      <LogoMark />
      <span className="hidden flex-col leading-none min-[400px]:flex">
        <span className="text-lg font-extrabold tracking-[0.18em]">EHATA</span>
        <span className="mt-1 flex items-center gap-2 text-[9px] font-light tracking-[0.34em] text-muted">
          <span className="h-px w-4 bg-gradient-to-r from-blue to-sky" aria-hidden />
          DIGITAL SOLUTIONS
          <span className="h-px w-4 bg-gradient-to-r from-sky to-blue" aria-hidden />
        </span>
      </span>
    </span>
  );
}
