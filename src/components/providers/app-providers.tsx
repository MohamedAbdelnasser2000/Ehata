"use client";

/**
 * Global providers: Lenis smooth scrolling wired into GSAP ScrollTrigger.
 * Page transitions are handled per-route in layout. The site keeps the
 * native mouse cursor — no custom cursor layer.
 */
import { useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/hooks";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll — one Lenis instance drives the window scroll and feeds
 * ScrollTrigger through the GSAP ticker so scroll-linked 3D stays in sync.
 * Users with prefers-reduced-motion get native scrolling instead.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    // Keep Lenis and native scroll anchors in sync.
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Refresh once fonts/layout settle so trigger start/end stay accurate.
    const refresh = window.setTimeout(
      () => ScrollTrigger.refresh(),
      600,
    );

    return () => {
      window.clearTimeout(refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
