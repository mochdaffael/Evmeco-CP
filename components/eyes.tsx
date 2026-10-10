'use client';

import { useEffect, useRef } from 'react';

export function Eyes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 9;
      const y = (e.clientY / window.innerHeight - 0.5) * 7;
      ref.current?.querySelectorAll('b').forEach((pupil) => {
        pupil.style.transform = `translate(${x}px,${y}px)`;
      });
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="eyes" ref={ref} aria-hidden="true">
      <i>
        <b />
      </i>
      <i>
        <b />
      </i>
    </div>
  );
}
