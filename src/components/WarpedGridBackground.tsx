import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from '@/shaders/warpedGrid';

function WarpedGrid() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 }); // Normalized mouse coords [0, 1]

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }, // Start in center
    uViewportWidth: { value: viewport.width },
    uViewportHeight: { value: viewport.height },
    uColor: { value: new THREE.Color(0x4080ff) }, // Base color (blueish)
    uDistHighlight: { value: viewport.width * 0.1 }, // Match influence radius
  }), [viewport.width, viewport.height]);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Store normalized mouse coordinates [0, 1]
      mouse.current.x = event.clientX / window.innerWidth;
      mouse.current.y = 1.0 - (event.clientY / window.innerHeight); // Invert Y
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      // Update uniforms
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);

      // Optional: subtle mesh rotation
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
      mesh.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  // Create a large plane geometry with many subdivisions for warping
  const geometry = useMemo(() => new THREE.PlaneGeometry(viewport.width * 2, viewport.height * 2, 64, 64), [viewport.width, viewport.height]);

  return (
    <mesh ref={mesh} geometry={geometry}>
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function WarpedGridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <WarpedGrid />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
} 