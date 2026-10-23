"use client";

/**
 * MagneticButton — a link/button whose label and body lean toward the cursor.
 * Renders <a> when `href` is given, <button> otherwise. Reduced motion = no pull.
 */
import Link from "next/link";
import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-gradient-signature text-white shadow-[0_10px_30px_-10px_rgba(0,87,231,.6)] hover:shadow-[0_14px_36px_-8px_rgba(0,87,231,.7)]",
  outline:
    "border border-line bg-surface/60 text-foreground hover:border-blue/50 hover:text-blue",
  ghost: "text-foreground hover:text-blue",
  onDark:
    "bg-white text-navy hover:bg-sky hover:text-white",
} as const;

const SIZES = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
} as const;

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  disabled,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const PULL = 0.28;

  function handleMove(e: MouseEvent) {
    if (reduced || !ref.current || !inner.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${dx * PULL}px, ${dy * PULL}px)`;
    inner.current.style.transform = `translate(${dx * PULL * 0.4}px, ${dy * PULL * 0.4}px)`;
  }

  function handleLeave() {
    if (!ref.current || !inner.current) return;
    ref.current.style.transform = "";
    inner.current.style.transform = "";
  }

  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,box-shadow,colors] duration-300 ease-out will-change-transform select-none",
    VARIANTS[variant],
    SIZES[size],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = (
    <span ref={inner} className="inline-flex items-center gap-2 transition-transform duration-300 ease-out">
      {children}
    </span>
  );

  const handlers = reduced
    ? {}
    : { onMouseMove: handleMove, onMouseLeave: handleLeave };

  if (href) {
    const external = /^https?:/.test(href);
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          {...handlers}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cls}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        {...handlers}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...handlers}
    >
      {content}
    </button>
  );
}
