"use client";

/** Thin gradient scroll-progress bar pinned under the navbar's stacking level. */
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="bg-gradient-signature fixed inset-x-0 top-0 z-[76] h-[3px] origin-left rtl:origin-right"
      style={{ scaleX }}
    />
  );
}
