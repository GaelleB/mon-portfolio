'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<'default' | 'dark' | 'blue'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      const cursorType = element?.closest('[data-cursor]')?.getAttribute('data-cursor');

      switch (cursorType) {
        case 'dark':
          setVariant('dark');
          break;
        case 'blue':
          setVariant('blue');
          break;
        default:
          setVariant('default');
          break;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  const getColor = () => {
    switch (variant) {
      case 'dark':
        return 'bg-black';
      case 'blue':
        return 'bg-blue-400';
      default:
        return 'bg-[var(--color-taxi-hover)]';
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    >
      <div
        className={`w-10 h-10 rounded-full opacity-80 transition-colors duration-200 ${getColor()}`}
      />
    </div>
  );
}