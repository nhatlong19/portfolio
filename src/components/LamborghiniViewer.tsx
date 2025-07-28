import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Demo model: Toy Car (free, public, glTF from KhronosGroup)
// Source: https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/ToyCar/glTF/ToyCar.gltf
const MODEL_URL = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/ToyCar/glTF/ToyCar.gltf';

function CarModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);
  
  return <primitive ref={group} object={scene} scale={2} position={[0, 0, 0]} />;
}

export default function CarViewer() {
  return (
    <div className="relative w-full h-[400px] md:h-[520px] rounded-xl overflow-hidden shadow-xl bg-black/80">
      <Canvas camera={{ position: [2.5, 1.5, 3.5], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow />
        <Suspense fallback={<Html center>Loading Car...</Html>}>
          <CarModel />
          <Environment preset="city" />
        </Suspense>
        {/* Controls: Enable rotation, zoom, disable pan, set target */}
        <OrbitControls enablePan={false} enableZoom={true} target={[0, 0.5, 0]} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      {/* Removed buttons for opening door / going inside */}
    </div>
  );
} 