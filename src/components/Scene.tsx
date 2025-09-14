// src/components/Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* Simple demo geometry (replace with a GLB/GLTF model if desired) */}
      <mesh rotation={[0.4, 0.6, 0]}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
