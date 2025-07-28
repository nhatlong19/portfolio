import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FollowingBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to +1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // Map mouse position to 3D space within the viewport bounds
      const x = mouse.current.x * (viewport.width / 2);
      const y = mouse.current.y * (viewport.height / 2);
      // Smoothly move the blob towards the mouse position
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, x, 0.05);
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, y, 0.05);
      
      // Add some subtle rotation or animation
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow position={[0, 0, -5]}> {/* Z position to keep it in the background */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#5ee7df"
        roughness={0.1}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.2}
        transmission={0.8}
        thickness={0.5}
        ior={1.5}
        reflectivity={1}
        emissive="#5ee7df"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function MouseFollower3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <FollowingBlob />
          <Environment preset="sunset" />
        </Suspense>
        {/* Disable OrbitControls as we are following mouse */}
        {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} /> */}
      </Canvas>
    </div>
  );
} 