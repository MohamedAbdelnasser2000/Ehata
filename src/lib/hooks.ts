"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

/**
 * Reactive `matchMedia` via useSyncExternalStore — subscription-based, so
 * hydration stays consistent (server snapshot = false, client syncs silently).
 */
const FALSE_SNAPSHOT = () => false;

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, FALSE_SNAPSHOT);
}

/** True when the visitor asked the OS to reduce motion. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

let webglAffordability: boolean | null = null;

/** One-shot capability probe, cached module-side. */
function detectWebGL(): boolean {
  if (webglAffordability !== null) return webglAffordability;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    const lowPower =
      (navigator.hardwareConcurrency ?? 4) < 4 ||
      // deviceMemory is Chromium-only; treat its absence as "unknown", not "low".
      ("deviceMemory" in navigator
        ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
        : 4) < 4;
    webglAffordability = Boolean(gl) && !lowPower;
  } catch {
    webglAffordability = false;
  }
  return webglAffordability;
}

/**
 * Decides whether to mount the WebGL hero at all.
 * Falls back to the static hero for reduced-motion users, devices reporting
 * very low core counts, and browsers without WebGL.
 * Returns null until the probe has run client-side (keeps SSR hydration clean).
 */
export function useCanAfford3D(): boolean | null {
  const reduced = useReducedMotion();
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Deferred out of the effect body per react-hooks/set-state-in-effect.
    const id = window.requestAnimationFrame(() =>
      setSupported(detectWebGL()),
    );
    return () => window.cancelAnimationFrame(id);
  }, []);

  if (reduced) return false;
  return supported;
}

/** Fine-pointer detection — the custom cursor only renders when true. */
export function useFinePointer(): boolean {
  return useMediaQuery("(pointer: fine)");
}
