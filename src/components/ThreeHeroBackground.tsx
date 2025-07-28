import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

function EnergySphere() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) * 0.1;
    }
  });
  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshPhysicalMaterial
        color="#5ee7df"
        roughness={0.15}
        metalness={0.7}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.7}
        thickness={0.7}
        ior={1.3}
        reflectivity={1}
        emissive="#5ee7df"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export default function ThreeHeroBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-[420px] md:h-[520px] z-1 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 4, 5]} intensity={1.2} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <EnergySphere />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent dark:from-[#111]/80" />
    </div>
  );
} 