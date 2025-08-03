export interface Complex {
  real: number;
  imaginary: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface ColorScheme {
  name: string;
  colors: string[];
}

export interface BaseFractalProps {
  width: number;
  height: number;
  className?: string;
  style?: Record<string, any>;
}

export interface MandelbrotProps extends BaseFractalProps {
  maxIterations?: number;
  zoom?: number;
  centerX?: number;
  centerY?: number;
  colorScheme?: 'default' | 'rainbow' | 'grayscale' | 'fire';
}

export interface JuliaProps extends BaseFractalProps {
  c: Complex;
  maxIterations?: number;
  zoom?: number;
  centerX?: number;
  centerY?: number;
  colorScheme?: 'default' | 'rainbow' | 'grayscale' | 'fire';
}

export interface KochProps extends BaseFractalProps {
  iterations?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface SierpinskiProps extends BaseFractalProps {
  iterations?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface LSystemProps extends BaseFractalProps {
  axiom: string;
  rules: Record<string, string>;
  iterations?: number;
  angle?: number;
  strokeColor?: string;
  strokeWidth?: number;
  startX?: number;
  startY?: number;
  startAngle?: number;
  stepSize?: number;
}

export interface BarnsleyProps extends BaseFractalProps {
  points?: number;
  color?: string;
  pointSize?: number;
}
