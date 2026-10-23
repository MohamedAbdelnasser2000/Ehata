"use client";

/**
 * CodeSymbols — floating { } < / > ; glyphs rendered as camera-facing
 * sprites from canvas textures (zero font/network dependencies, cheap draw
 * calls). Plus a lightweight particle field sharing the same drift loop.
 */
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GLYPHS = ["{", "}", "<", "/", ">", ";", "( )"];

function makeGlyphTexture(glyph: string): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, size, size);
    ctx.font =
      "600 84px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#2E9BFF";
    ctx.fillText(glyph, size / 2, size / 2 + 4);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Deterministic pseudo-random so SSR-less but re-render-stable layout. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function CodeSymbols({ reduced = false }: { reduced?: boolean }) {
  const textures = useMemo(() => {
    const map = new Map<string, THREE.CanvasTexture>();
    for (const g of GLYPHS) map.set(g, makeGlyphTexture(g));
    return map;
  }, []);

  const sprites = useMemo(() => {
    const rand = mulberry32(1337);
    return Array.from({ length: 16 }, (_, i) => ({
      key: i,
      glyph: GLYPHS[Math.floor(rand() * GLYPHS.length)]!,
      x: (rand() - 0.5) * 16,
      y: (rand() - 0.5) * 9,
      z: -2 - rand() * 6,
      scale: 0.55 + rand() * 0.9,
      speed: 0.15 + rand() * 0.3,
      phase: rand() * Math.PI * 2,
    }));
  }, []);

  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reduced || !group.current) return;
    const t = clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const s = sprites[i]!;
      child.position.y = s.y + Math.sin(t * s.speed + s.phase) * 0.45;
      child.position.x = s.x + Math.cos(t * s.speed * 0.6 + s.phase) * 0.3;
    });
  });

  return (
    <group ref={group}>
      {sprites.map((s) => (
        <sprite key={s.key} position={[s.x, s.y, s.z]} scale={s.scale}>
          <spriteMaterial
            map={textures.get(s.glyph)}
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </sprite>
      ))}
    </group>
  );
}

export function Particles({ count = 220, reduced = false }: { count?: number; reduced?: boolean }) {
  const positions = useMemo(() => {
    const rand = mulberry32(2024);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 18;
      arr[i * 3 + 1] = (rand() - 0.5) * 10;
      arr[i * 3 + 2] = -1 - rand() * 8;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!reduced && ref.current) {
      ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.02) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#2E9BFF"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
