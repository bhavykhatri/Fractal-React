import { Complex, Point } from '../types';

export function addComplex(a: Complex, b: Complex): Complex {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary
  };
}

export function multiplyComplex(a: Complex, b: Complex): Complex {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real
  };
}

export function squareComplex(z: Complex): Complex {
  return {
    real: z.real * z.real - z.imaginary * z.imaginary,
    imaginary: 2 * z.real * z.imaginary
  };
}

export function magnitudeSquared(z: Complex): number {
  return z.real * z.real + z.imaginary * z.imaginary;
}

export function magnitude(z: Complex): number {
  return Math.sqrt(magnitudeSquared(z));
}

export function rotatePoint(point: Point, angle: number, center: Point = { x: 0, y: 0 }): Point {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  
  return {
    x: center.x + dx * cos - dy * sin,
    y: center.y + dx * sin + dy * cos
  };
}

export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
