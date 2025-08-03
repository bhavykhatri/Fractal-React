import React, { useRef, useEffect } from 'react';
import { MandelbrotProps } from '../types';
import { getColor, squareComplex, addComplex, magnitudeSquared } from '../utils';

export const MandelbrotSet: React.FC<MandelbrotProps> = ({
  width,
  height,
  maxIterations = 100,
  zoom = 1,
  centerX = -0.5,
  centerY = 0,
  colorScheme = 'default',
  className,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const xRange = 4 / zoom;
    const yRange = 4 / zoom;
    const xMin = centerX - xRange / 2;
    const yMin = centerY - yRange / 2;

    for (let py = 0; py < height; py++) {
      for (let px = 0; px < width; px++) {
        const x = xMin + (px / width) * xRange;
        const y = yMin + (py / height) * yRange;
        
        let z = { real: 0, imaginary: 0 };
        const c = { real: x, imaginary: y };
        let iterations = 0;

        while (iterations < maxIterations && magnitudeSquared(z) < 4) {
          z = addComplex(squareComplex(z), c);
          iterations++;
        }

        const color = getColor(iterations, maxIterations, colorScheme);
        const rgb = hexToRgb(color);
        
        const index = (py * width + px) * 4;
        data[index] = rgb.r;     // Red
        data[index + 1] = rgb.g; // Green
        data[index + 2] = rgb.b; // Blue
        data[index + 3] = 255;   // Alpha
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [width, height, maxIterations, zoom, centerX, centerY, colorScheme]);

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

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}
