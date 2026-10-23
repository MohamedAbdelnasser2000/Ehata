"use client";

/**
 * AnimatedCounter — counts up once when scrolled into view.
 * Reduced motion renders the final value immediately.
 */
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const spring = useMotionValue(0);
  const display = useSpring(spring, {
    stiffness: 40,
    damping: 24,
    restDelta: 0.5,
  });

  useEffect(() => {
    const unsub = display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(Math.round(latest)) + suffix;
      }
    });
    return unsub;
  }, [display, suffix]);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      // No count-up: jump straight to the final value.
      display.jump(value);
      if (ref.current) ref.current.textContent = format(value) + suffix;
      return;
    }
    spring.set(value);
  }, [inView, reduced, spring, display, value, suffix]);

  function format(n: number) {
    return n >= 1000 ? n.toLocaleString("en-US") : String(n);
  }

  return (
    <span
      ref={ref}
      className={className}
      suppressHydrationWarning
      aria-label={`${value.toLocaleString("en-US")}${suffix}`}
    >
      {format(0)}
      {suffix}
    </span>
  );
}
