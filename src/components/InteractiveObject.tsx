import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function SceneObjects() {
  const astronautRef = useRef<THREE.Group>(null);
  const issRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Load the astronaut model
  const { scene: astronautScene } = useGLTF('/astronaut.glb');
  // Load the ISS model
  const { scene: issScene } = useGLTF('/ISS.glb');

  // Set initial scale (adjust as needed)
  astronautScene.scale.set(1, 1, 1); // Adjust size of astronaut
  issScene.scale.set(0.015, 0.015, 0.015); // Adjust size of ISS, making it larger

  // Initial positions (will be updated in useFrame)
  astronautScene.position.set(viewport.width * 0.3, viewport.height * 0.2, 0);
  issScene.position.set(-viewport.width * 0.3, -viewport.height * 0.2, 0);

  useFrame(({ clock }) => {
    // Astronaut subtle movement
    if (astronautRef.current) {
      // Move astronaut across the viewport
      astronautRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.3) * viewport.width * 0.4;
      astronautRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.4) * viewport.height * 0.3;
      astronautRef.current.rotation.y += 0.002;
    }

    // ISS subtle movement
    if (issRef.current) {
      // Move ISS across the viewport
      issRef.current.position.x = Math.cos(clock.getElapsedTime() * 0.2) * viewport.width * 0.35;
      issRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.25) * viewport.height * 0.4;
      issRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <group>
      <primitive object={astronautScene} ref={astronautRef} />
      <primitive object={issScene} ref={issRef} />
    </group>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-1">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <SceneObjects />
        </Suspense>
        {/* OrbitControls allows mouse interaction (drag to rotate) */}
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 