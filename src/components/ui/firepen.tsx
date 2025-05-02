'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  life: number;
}

let idCounter = 0;

export default function FireCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setParticles((prev) => [
        ...prev,
        {
          id: idCounter++,
          x: e.clientX,
          y: e.clientY,
          life: 100,
        },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 5 }))
          .filter((p) => p.life > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed rounded-full z-[9999]"
          style={{
            left: p.x,
            top: p.y,
            width: '10px',
            height: '10px',
            background: `radial-gradient(circle, rgba(255,165,0,${p.life / 100}) 0%, rgba(255,0,0,0) 70%)`,
            transform: 'translate(-50%, -50%)',
            opacity: p.life / 100,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </>
  );
}
