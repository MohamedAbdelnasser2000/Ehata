"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

interface InteractiveParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

/**
 * InteractiveParticles — Inspired by Animaster Lib.
 * High-performance, lightweight canvas particle constellation that interacts with mouse.
 * Automatically throttles and pauses when off-screen.
 */
export function InteractiveParticles({
  className,
  quantity = 35,
  staticity = 50,
  ease = 50,
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const isVisible = useRef(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    context.current = canvas.getContext("2d");
    if (!context.current) return;

    let dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const initCanvas = () => {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      if (context.current) {
        context.current.scale(dpr, dpr);
      }
      createParticles();
    };

    const createParticles = () => {
      particles.current = [];
      const count = Math.floor((width * height) / 18000) || quantity;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const baseAlpha = Math.random() * 0.45 + 0.15;
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size,
          alpha: baseAlpha,
          baseAlpha,
        });
      }
    };

    const drawParticles = () => {
      if (!context.current || !isVisible.current) return;
      context.current.clearRect(0, 0, width, height);

      // Check dark mode
      const isDark = document.documentElement.classList.contains("dark");
      const rgbColor = isDark ? "46, 155, 255" : "0, 87, 231";

      // Smooth mouse follow
      mouse.current.x += (mousePosition.current.x - mouse.current.x) / ease;
      mouse.current.y += (mousePosition.current.y - mouse.current.y) / ease;

      const pArr = particles.current;
      const pLen = pArr.length;

      for (let i = 0; i < pLen; i++) {
        const p = pArr[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse proximity interaction (push away gently)
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist && dist > 0) {
          const force = (maxDist - dist) / maxDist;
          p.x -= (dx / dist) * force * (staticity / 15);
          p.y -= (dy / dist) * force * (staticity / 15);
        }

        // Draw particle
        context.current.beginPath();
        context.current.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context.current.fillStyle = `rgba(${rgbColor}, ${p.alpha})`;
        context.current.fill();

        // Connect nearby particles with subtle constellation lines
        for (let j = i + 1; j < pLen; j++) {
          const p2 = pArr[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 80) {
            const lineAlpha = (1 - cdist / 80) * 0.15;
            context.current.beginPath();
            context.current.moveTo(p.x, p.y);
            context.current.lineTo(p2.x, p2.y);
            context.current.strokeStyle = `rgba(${rgbColor}, ${lineAlpha})`;
            context.current.lineWidth = 0.6;
            context.current.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      initCanvas();
    };

    // Observer to pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            cancelAnimationFrame(animationFrameId.current || 0);
            drawParticles();
          }
        });
      },
      { threshold: 0.05 },
    );

    observer.observe(container);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    initCanvas();
    drawParticles();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [reduced, quantity, staticity, ease]);

  if (reduced) return null;

  return (
    <div
      ref={canvasContainerRef}
      className={cn("pointer-events-none absolute inset-0 -z-5 overflow-hidden", className)}
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
