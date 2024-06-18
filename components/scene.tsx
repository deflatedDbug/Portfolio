"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import Model from "./model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas 
      gl={{ antialias: true }} 
      dpr={[1, 1.5]} 
      className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 50, 100]} intensity={1} />
      <directionalLight position={[-100, -50, -100]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
