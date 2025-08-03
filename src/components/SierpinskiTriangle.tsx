import React, { useRef, useEffect } from 'react';
import { SierpinskiProps, Point } from '../types';

export const SierpinskiTriangle: React.FC<SierpinskiProps> = ({
  width,
  height,
  iterations = 6,
  fillColor = '#000000',
  strokeColor = '#000000',
  strokeWidth = 1,
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
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;

    // Starting triangle
    const size = Math.min(width, height) * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;
    
    const height60 = size * Math.sqrt(3) / 2;
    
    const p1: Point = { x: centerX, y: centerY - height60 / 2 };
    const p2: Point = { x: centerX - size / 2, y: centerY + height60 / 2 };
    const p3: Point = { x: centerX + size / 2, y: centerY + height60 / 2 };

    drawSierpinski(ctx, p1, p2, p3, iterations);

  }, [width, height, iterations, fillColor, strokeColor, strokeWidth]);

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

function drawSierpinski(
  ctx: CanvasRenderingContext2D, 
  p1: Point, 
  p2: Point, 
  p3: Point, 
  iterations: number
) {
  if (iterations === 0) {
    // Draw filled triangle
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.fill();
    return;
  }

  // Calculate midpoints
  const mid1: Point = {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2
  };

  const mid2: Point = {
    x: (p2.x + p3.x) / 2,
    y: (p2.y + p3.y) / 2
  };

  const mid3: Point = {
    x: (p1.x + p3.x) / 2,
    y: (p1.y + p3.y) / 2
  };

  // Recursively draw three smaller triangles
  drawSierpinski(ctx, p1, mid1, mid3, iterations - 1);
  drawSierpinski(ctx, mid1, p2, mid2, iterations - 1);
  drawSierpinski(ctx, mid3, mid2, p3, iterations - 1);
}
