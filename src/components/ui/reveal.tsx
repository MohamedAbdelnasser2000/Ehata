"use client";

/**
 * Motion-ready text & section primitives.
 * - <Reveal> fades/slides any block into view.
 * - <SplitHeading> performs a word-stagger "split text" reveal on headings.
 * Both collapse to plain static renders when prefers-reduced-motion is set.
 */
import { motion, useInView } from "motion/react";
import {
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-stagger heading reveal. Pass an array of lines (they render as blocks)
 * and optionally a class for gradient emphasis on specific lines.
 */
export function SplitHeading({
  lines,
  className,
  as: Tag = "h2",
  lineClassName,
}: {
  lines: (string | ReactNode)[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  lineClassName?: string[];
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = lines.map((line) =>
    typeof line === "string" ? line.split(" ") : [line],
  );

  let wordIndex = 0;
  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={ref}
      className={cn("text-balance", className)}
    >
      {words.map((lineWords, li) => (
        <span key={li} className={cn("block", lineClassName?.[li])}>
          {lineWords.map((word, wi) => {
            const i = wordIndex++;
            if (reduced) {
              return (
                <span key={wi}>
                  {word}
                  {wi < lineWords.length - 1 ? " " : ""}
                </span>
              );
            }
            return (
              <motion.span
                key={wi}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: "0.45em", rotateX: -30 }}
                animate={
                  inView ? { opacity: 1, y: 0, rotateX: 0 } : undefined
                }
                transition={{
                  duration: 0.55,
                  delay: i * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {wi < lineWords.length - 1 ? "\u00A0" : ""}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Comp>
  );
}

/** Small uppercase gradient kicker used above section titles. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-blue uppercase">
      <span
        className="inline-block h-px w-8 bg-blue"
        aria-hidden
      />
      {children}
    </span>
  );
}
