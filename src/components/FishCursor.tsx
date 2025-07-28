import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Fish({ mousePosition }: { mousePosition: THREE.Vector2 }) {
  const fishRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  // Create a simple fish shape using basic geometries
  const fishGeometry = new THREE.ConeGeometry(0.5, 2, 4);
  const fishMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x00aaff,
    shininess: 100,
    transparent: true,
    opacity: 0.8
  });

  useFrame((state) => {
    if (fishRef.current) {
      // Convert mouse position to world coordinates
      const x = (mousePosition.x - 0.5) * viewport.width;
      const y = (mousePosition.y - 0.5) * viewport.height;
      
      // Smoothly move fish towards mouse position
      fishRef.current.position.x += (x - fishRef.current.position.x) * 0.1;
      fishRef.current.position.y += (y - fishRef.current.position.y) * 0.1;
      
      // Rotate fish to face movement direction
      if (Math.abs(x - fishRef.current.position.x) > 0.1) {
        const angle = Math.atan2(
          y - fishRef.current.position.y,
          x - fishRef.current.position.x
        );
        fishRef.current.rotation.z = angle;
      }
      
      // Add some swimming animation
      fishRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={fishRef}>
      <mesh geometry={fishGeometry} material={fishMaterial}>
        {/* Add tail fin */}
        <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <planeGeometry args={[1, 1]} />
          <meshPhongMaterial color={0x00aaff} side={THREE.DoubleSide} />
        </mesh>
        {/* Add eyes */}
        <mesh position={[0.5, 0.3, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhongMaterial color={0xffffff} />
        </mesh>
        <mesh position={[0.5, -0.3, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhongMaterial color={0xffffff} />
        </mesh>
      </mesh>
    </group>
  );
}

export default function FishCursor() {
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0.5, 0.5));

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition(new THREE.Vector2(
        event.clientX / window.innerWidth,
        1.0 - (event.clientY / window.innerHeight)
      ));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Fish mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
} 