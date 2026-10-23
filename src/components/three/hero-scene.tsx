"use client";

/**
 * HeroScene — the interactive 3D hero.
 * - E "bracket" model floats, follows the pointer (parallax) and is
 *   scroll-driven via a ref the parent's ScrollTrigger writes to.
 * - Bloom makes the gradient bar glow; kept mild for 60fps.
 * This module is only ever mounted client-side through a
 * `next/dynamic(..., { ssr: false })` wrapper (see hero-section.tsx).
 */
import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef, type RefObject } from "react";
import * as THREE from "three";
import { EModel } from "./e-model";
import { CodeSymbols, Particles } from "./code-symbols";

interface RigProps {
  scrollRef: RefObject<number>;
  reduced: boolean;
}

/**
 * Rig — combines mouse parallax (state.pointer) with scroll progress:
 * as the hero scrolls out, the E rotates, sinks and shrinks, reading like
 * one continuous camera move between sections.
 */
function Rig({ scrollRef, reduced }: RigProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const p = scrollRef.current ?? 0;

    // Pointer parallax (frame-rate independent damping).
    const targetX = reduced ? 0 : state.pointer.y * 0.18;
    const targetY = reduced ? 0 : state.pointer.x * 0.28;
    const k = 1 - Math.pow(0.001, delta);
    g.rotation.x += (targetX - g.rotation.x) * k;
    g.rotation.y += (targetY + p * Math.PI * 1.1 - g.rotation.y) * k;

    // Scroll choreography.
    g.position.y = p * -1.1;
    const s = 1 - p * 0.32;
    g.scale.setScalar(s);
  });

  return (
    <group ref={group}>
      <Float
        speed={reduced ? 0 : 1.4}
        rotationIntensity={reduced ? 0 : 0.35}
        floatIntensity={reduced ? 0 : 0.9}
      >
        <EModel />
      </Float>
    </group>
  );
}

export default function HeroScene({
  scrollRef,
  reduced = false,
}: {
  scrollRef: RefObject<number>;
  reduced?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 34 }}
      dpr={[1, 1.75]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      {/* Studio-ish lighting: soft key, cool rim, blue under-glow. */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 8]} intensity={1.6} />
      <directionalLight position={[-6, -2, 4]} intensity={0.5} color="#2E9BFF" />
      <pointLight position={[0, -3, 3]} intensity={12} color="#0057E7" distance={9} />

      <Rig scrollRef={scrollRef} reduced={reduced} />
      <CodeSymbols reduced={reduced} />
      <Particles reduced={reduced} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.55}
          luminanceSmoothing={0.2}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
