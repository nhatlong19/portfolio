import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

function SimpleCube() {
  const mesh = useRef<THREE.Mesh>(null);

  // Optional: Add a subtle rotation animation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
}

export default function Simple3DBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
           <SimpleCube />
           {/* Optional: Add Environment for better lighting/reflections */}
           <Environment preset="sunset" />
        </Suspense>
        {/* Allow rotating the cube with mouse */}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
} 