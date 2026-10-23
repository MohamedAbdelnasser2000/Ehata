"use client";

/**
 * TiltCard — 3D hover tilt driven by pointer position (disabled for
 * reduced motion / coarse pointers). Used by service & project cards.
 */
import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateZ(0)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform",
        className,
      )}
      data-cursor="hover"
    >
      {children}
    </div>
  );
}
