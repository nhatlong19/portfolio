'use client'
import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Particles = dynamic(() => import('react-particles'), { ssr: false });

interface AnimatedBackgroundProps {}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: '',
          },
          fpsLimit: 200,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 2,
              },
            },
          },
          particles: {
            color: {
              value: '#9DB2BF',
            },
            links: {
              color: '#DDE6ED',
              distance: 270,
              enable: true,
              opacity: 0.4,
              width: 0.1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;