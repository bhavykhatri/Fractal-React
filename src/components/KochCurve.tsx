import React, { useRef, useEffect } from 'react';
import { KochProps, Point } from '../types';

export const KochCurve: React.FC<KochProps> = ({
  width,
  height,
  iterations = 4,
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
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;

    // Generate Koch snowflake using the same approach as Python
    const points = generateKochSnowflake(iterations, width, height);
    
    // Draw the snowflake
    drawKochSnowflake(ctx, points);

  }, [width, height, iterations, strokeColor, strokeWidth]);

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

function generateKochSnowflake(order: number, canvasWidth: number, canvasHeight: number): Point[] {
  // Calculate the size and position to fit the snowflake in the canvas
  const size = Math.min(canvasWidth, canvasHeight) * 0.7;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  
  // Create initial equilateral triangle points
  const length = size;
  const p1: Point = { 
    x: centerX - length / 2, 
    y: centerY + (Math.sqrt(3) * length / 6) 
  };
  const p2: Point = { 
    x: centerX + length / 2, 
    y: centerY + (Math.sqrt(3) * length / 6) 
  };
  const p3: Point = { 
    x: centerX, 
    y: centerY - (Math.sqrt(3) * length / 3) 
  };

  // Generate Koch curves for each side of the triangle
  const side1 = kochCurve(p1, p2, order);
  const side2 = kochCurve(p2, p3, order);
  const side3 = kochCurve(p3, p1, order);

  // Combine all sides (remove duplicate points at connections)
  return [...side1.slice(0, -1), ...side2.slice(0, -1), ...side3, side1[0]];
}

function kochCurve(p1: Point, p2: Point, depth: number): Point[] {
  if (depth === 0) {
    return [p1, p2];
  }

  // Calculate the three division points
  const dx = (p2.x - p1.x) / 3;
  const dy = (p2.y - p1.y) / 3;
  
  const pA: Point = { x: p1.x + dx, y: p1.y + dy };
  const pB: Point = { x: p1.x + 2 * dx, y: p1.y + 2 * dy };
  
  // Calculate the peak point using the same method as Python
  const angle = Math.atan2(dy, dx) - Math.PI / 3;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const pC: Point = {
    x: pA.x + Math.cos(angle) * distance,
    y: pA.y + Math.sin(angle) * distance
  };

  // Recursively generate the four segments
  const seg1 = kochCurve(p1, pA, depth - 1);
  const seg2 = kochCurve(pA, pC, depth - 1);
  const seg3 = kochCurve(pC, pB, depth - 1);
  const seg4 = kochCurve(pB, p2, depth - 1);

  // Combine segments, removing duplicate connection points
  return [
    ...seg1.slice(0, -1),
    ...seg2.slice(0, -1),
    ...seg3.slice(0, -1),
    ...seg4
  ];
}

function drawKochSnowflake(ctx: CanvasRenderingContext2D, points: Point[]) {
  if (points.length < 2) return;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }

  ctx.stroke();
}
