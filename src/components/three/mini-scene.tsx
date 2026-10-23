"use client";

/**
 * MiniScene — a compact, postprocessing-free render of the E used in the
 * CTA banner and page heroes. Same scroll-ref contract as HeroScene so the
 * model can react to its section's exit.
 */
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EModel } from "./e-model";

export default function MiniScene({ dark = true }: { dark?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 30 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 6]} intensity={1.4} />
      <pointLight position={[0, -2.5, 3]} intensity={10} color="#0057E7" distance={8} />
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1}>
        <EModel dark={dark} scale={0.85} />
      </Float>
    </Canvas>
  );
}
