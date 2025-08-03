import React, { useRef, useEffect } from 'react';
import { BarnsleyProps, Point } from '../types';

export const BarnsleyFern: React.FC<BarnsleyProps> = ({
  width,
  height,
  points = 50000,
  color = '#008000',
  pointSize = 1,
  className,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color;

    let x = 0;
    let y = 0;

    for (let i = 0; i < points; i++) {
      const r = Math.random();
      let newX, newY;

      if (r < 0.01) {
        // Stem
        newX = 0;
        newY = 0.16 * y;
      } else if (r < 0.86) {
        // Successively smaller leaflets
        newX = 0.85 * x + 0.04 * y;
        newY = -0.04 * x + 0.85 * y + 1.6;
      } else if (r < 0.93) {
        // Largest left-hand leaflet
        newX = 0.2 * x - 0.26 * y;
        newY = 0.23 * x + 0.22 * y + 1.6;
      } else {
        // Largest right-hand leaflet
        newX = -0.15 * x + 0.28 * y;
        newY = 0.26 * x + 0.24 * y + 0.44;
      }

      x = newX;
      y = newY;

      // Transform coordinates to canvas space
      const canvasX = width / 2 + x * width / 12;
      const canvasY = height - y * height / 12;

      // Draw point
      if (pointSize === 1) {
        ctx.fillRect(canvasX, canvasY, 1, 1);
      } else {
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, pointSize / 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

  }, [width, height, points, color, pointSize]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  );
};
