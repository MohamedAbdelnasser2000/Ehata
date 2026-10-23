"use client";

/**
 * PageTransition — Motion AnimatePresence fade/slide keyed by pathname.
 * Children cross-fade on route change; reduced-motion collapses to a plain
 * render (duration 0 via CSS override + guarded variants).
 */
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  /**
   * Route change: defensively kill every live ScrollTrigger. A pinned
   * section's pin-spacer wraps React-owned nodes; if it were still live at
   * deletion time React's mutation-phase `removeChild` would throw
   * NotFoundError. Sections already revert their own pins from a
   * layout-effect cleanup (which runs before the DOM removal), but any
   * trigger left live by an interrupted/edge teardown is caught here,
   * while the old DOM is still intact. Each page's sections recreate
   * their own triggers on mount. Comparing against the previous pathname
   * (instead of a "first run" flag) keeps this Strict-safe: effect
   * double-invocation on mount sees no change.
   */
  const prevPath = useRef(pathname);
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // New route = new heights: recalculate all ScrollTrigger boundaries.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => window.clearTimeout(id);
  }, [pathname]);

  if (reduced) return <div key={pathname}>{children}</div>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
