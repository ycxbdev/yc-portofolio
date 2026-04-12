'use client';

import { useEffect, useRef } from 'react';

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF></?|\\[]{}=+-_';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 13;

    // Inicializar tamaño antes de calcular cols/drops
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let cols = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from(
      { length: cols },
      () => Math.random() * -80
    );

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const newCols = Math.floor(canvas.width / fontSize);
      if (newCols > cols) {
        for (let i = cols; i < newCols; i++) drops.push(Math.random() * -80);
      } else if (newCols < cols) {
        drops = drops.slice(0, newCols);
      }
      cols = newCols;
    };
    resize();
    window.addEventListener('resize', resize);

    let rafId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * fontSize;

        // Carácter principal — blanco brillante
        if (drops[i] > 0) {
          ctx.fillStyle = '#ffffff';
          ctx.font = `bold ${fontSize}px monospace`;
          ctx.fillText(char, i * fontSize, y);
        }

        // Cola — verde neón con gradiente de opacidad
        ctx.font = `${fontSize}px monospace`;
        const trailLen = 20;
        for (let t = 1; t < trailLen; t++) {
          const ty = (drops[i] - t) * fontSize;
          if (ty < 0) continue;
          const alpha = ((trailLen - t) / trailLen) * 0.7;
          ctx.fillStyle = `rgba(0, 255, 159, ${alpha})`;
          const trailChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillText(trailChar, i * fontSize, ty);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ display: 'block' }}
    />
  );
}
