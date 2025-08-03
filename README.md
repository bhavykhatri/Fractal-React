# Fractal React Components

A React component library for rendering beautiful fractal patterns including Mandelbrot sets, Julia sets, Koch curves, Sierpinski triangles, L-Systems, and Barnsley ferns.

## Installation

```bash
npm install fractal-react
```

## Usage

```tsx
import { MandelbrotSet, JuliaSet, KochCurve, SierpinskiTriangle, LSystem, BarnsleyFern } from 'fractal-react';

function App() {
  return (
    <div>
      <MandelbrotSet width={400} height={400} maxIterations={100} />
      <JuliaSet width={400} height={400} c={{ real: -0.7, imaginary: 0.27015 }} />
      <KochCurve width={400} height={200} iterations={4} />
      <SierpinskiTriangle width={400} height={400} iterations={6} />
      <LSystem 
        width={400} 
        height={400} 
        axiom="F" 
        rules={{ F: "F+F-F-F+F" }} 
        iterations={4} 
        angle={90} 
      />
      <BarnsleyFern width={400} height={400} points={50000} />
    </div>
  );
}
```

## Components

### MandelbrotSet
Renders the famous Mandelbrot set fractal.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height  
- `maxIterations?: number` - Maximum iterations (default: 100)
- `zoom?: number` - Zoom level (default: 1)
- `centerX?: number` - Center X coordinate (default: -0.5)
- `centerY?: number` - Center Y coordinate (default: 0)
- `colorScheme?: string` - Color scheme ('default', 'rainbow', 'grayscale')

### JuliaSet
Renders Julia set fractals.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height
- `c: { real: number, imaginary: number }` - Complex constant
- `maxIterations?: number` - Maximum iterations (default: 100)
- `zoom?: number` - Zoom level (default: 1)
- `colorScheme?: string` - Color scheme

### KochCurve
Renders Koch snowflake curves.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height
- `iterations?: number` - Number of iterations (default: 4)
- `strokeColor?: string` - Line color (default: '#000000')
- `strokeWidth?: number` - Line width (default: 1)

### SierpinskiTriangle
Renders Sierpinski triangle fractals.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height
- `iterations?: number` - Number of iterations (default: 6)
- `fillColor?: string` - Fill color (default: '#000000')

### LSystem
Renders L-System fractals.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height
- `axiom: string` - Starting axiom
- `rules: Record<string, string>` - Production rules
- `iterations?: number` - Number of iterations (default: 4)
- `angle?: number` - Turn angle in degrees (default: 90)
- `strokeColor?: string` - Line color
- `strokeWidth?: number` - Line width

### BarnsleyFern
Renders Barnsley fern fractals.

**Props:**
- `width: number` - Canvas width
- `height: number` - Canvas height
- `points?: number` - Number of points to plot (default: 50000)
- `color?: string` - Point color (default: '#008000')

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Run tests
npm test

# Start Storybook
npm run storybook

# Build for production
npm run build
```

## License

MIT © Bhavy Khatri
