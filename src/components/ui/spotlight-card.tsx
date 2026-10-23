"use client";

import {
  useRef,
  useState,
  useCallback,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  tilt?: boolean;
  maxTilt?: number;
}

/**
 * SpotlightCard — Inspired by Skiper UI & Vengeance UI.
 * Renders an Apple/Vercel-style card with an interactive cursor-tracked radial glow
 * and optional smooth 3D tilt.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(0, 87, 231, 0.14)",
  tilt = false,
  maxTilt = 6,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });

      if (tilt && !reduced) {
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;
        cardRef.current.style.transform = `perspective(800px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateZ(0)`;
      }
    },
    [tilt, maxTilt, reduced],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-surface transition-[box-shadow,border-color,transform] duration-300 ease-out",
        tilt && !reduced && "will-change-transform",
        "hover:border-blue/35 hover:shadow-[0_12px_32px_-12px_rgba(0,87,231,0.22)]",
        className,
      )}
    >
      {/* Interactive cursor spotlight glow (Skiper UI style) */}
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
        aria-hidden
      />

      {/* Subtle border highlight following cursor */}
      <div
        className="pointer-events-none absolute -inset-[1px] z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${position.x}px ${position.y}px, rgba(46, 155, 255, 0.4), transparent 70%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
        aria-hidden
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
