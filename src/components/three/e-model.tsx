"use client";

/**
 * EModel — the EHATA "E" bracket mark as extruded 3D geometry:
 * two interlocking rounded brackets (left [ , right ]) in glossy navy,
 * plus the signature blue-gradient center bar (emissive, blooms).
 * Geometry is memoized; materials are module constants so re-renders
 * never allocate GPU resources.
 */
import { RoundedBox } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const NAVY_MAT = new THREE.MeshPhysicalMaterial({
  color: "#0A1033",
  roughness: 0.22,
  metalness: 0.55,
  clearcoat: 1,
  clearcoatRoughness: 0.18,
});

const BRACKET_LIGHT = new THREE.MeshPhysicalMaterial({
  color: "#DDE7F7",
  roughness: 0.3,
  metalness: 0.35,
  clearcoat: 0.9,
});

/** Canvas-textured horizontal gradient so the bar reads exactly #0057E7→#2E9BFF. */
function useGradientBarTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const g = ctx.createLinearGradient(0, 0, 256, 0);
      g.addColorStop(0, "#0057E7");
      g.addColorStop(1, "#2E9BFF");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 64);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

function BarMaterial() {
  const map = useGradientBarTexture();
  return (
    <meshStandardMaterial
      map={map}
      emissiveMap={map}
      emissive={"#2E9BFF"}
      emissiveIntensity={1.6}
      roughness={0.35}
      metalness={0.1}
      toneMapped={false}
    />
  );
}

/**
 * A "["/"]" bracket built from three rounded bars (spine + two arms),
 * so corners stay pill-soft like the logo.
 */
function Bracket({
  flip = false,
  material,
}: {
  flip?: boolean;
  material: THREE.Material;
}) {
  const s = flip ? -1 : 1;
  return (
    <group>
      {/* spine */}
      <RoundedBox
        args={[0.34, 3.1, 0.5]}
        radius={0.16}
        smoothness={4}
        position={[s * -1.05, 0, 0]}
        material={material}
      />
      {/* top arm */}
      <RoundedBox
        args={[1.25, 0.34, 0.5]}
        radius={0.16}
        smoothness={4}
        position={[s * -0.5, 1.38, 0]}
        material={material}
      />
      {/* bottom arm */}
      <RoundedBox
        args={[1.25, 0.34, 0.5]}
        radius={0.16}
        smoothness={4}
        position={[s * -0.5, -1.38, 0]}
        material={material}
      />
    </group>
  );
}

export function EModel({
  dark = false,
  position,
  rotation,
  scale,
}: {
  dark?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale ?? 1}>
      <EModelInner dark={dark} />
    </group>
  );
}

function EModelInner({ dark }: { dark: boolean }) {
  const bracketMat = dark ? BRACKET_LIGHT : NAVY_MAT;
  return (
    <>
      {/* Left bracket "[" */}
      <group position={[-0.55, 0, 0.1]}>
        <Bracket material={bracketMat} />
      </group>
      {/* Right bracket "]" interlocked, pushed slightly back */}
      <group position={[0.85, 0, -0.15]} rotation={[0, 0, Math.PI]}>
        <Bracket material={bracketMat} />
      </group>
      {/* Signature gradient center bar */}
      <RoundedBox
        args={[2.35, 0.46, 0.55]}
        radius={0.2}
        smoothness={4}
        position={[0.12, 0, 0.35]}
      >
        <BarMaterial />
      </RoundedBox>
    </>
  );
}
