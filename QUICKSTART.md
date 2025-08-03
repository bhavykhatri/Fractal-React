# Quick Start Guide

## Installation

```bash
npm install fractal-react
```

## Basic Usage

### 1. Import Components

```tsx
import { 
  MandelbrotSet, 
  JuliaSet, 
  KochCurve, 
  SierpinskiTriangle, 
  LSystem, 
  BarnsleyFern 
} from 'fractal-react';
```

### 2. Use in Your React Component

```tsx
function MyFractalApp() {
  return (
    <div>
      {/* Mandelbrot Set */}
      <MandelbrotSet 
        width={400} 
        height={400} 
        maxIterations={100}
        colorScheme="rainbow"
      />
      
      {/* Julia Set */}
      <JuliaSet 
        width={400} 
        height={400} 
        c={{ real: -0.7, imaginary: 0.27015 }}
        colorScheme="fire"
      />
      
      {/* Koch Snowflake */}
      <KochCurve 
        width={400} 
        height={400} 
        iterations={4}
        strokeColor="#0066cc"
      />
      
      {/* Sierpinski Triangle */}
      <SierpinskiTriangle 
        width={400} 
        height={400} 
        iterations={6}
        fillColor="#ff6600"
      />
      
      {/* L-System Tree */}
      <LSystem 
        width={400} 
        height={400} 
        axiom="F" 
        rules={{ F: "F[+F]F[-F]F" }} 
        iterations={4} 
        angle={25}
        strokeColor="#228B22"
      />
      
      {/* Barnsley Fern */}
      <BarnsleyFern 
        width={400} 
        height={400} 
        points={30000}
        color="#006400"
      />
    </div>
  );
}
```

### 3. Using Presets

```tsx
import { LSystem, lSystemPresets, juliaSetPresets } from 'fractal-react';

function PresetExample() {
  const treePreset = lSystemPresets.tree;
  const classicJulia = juliaSetPresets.classic;
  
  return (
    <div>
      <LSystem 
        width={400} 
        height={400} 
        axiom={treePreset.axiom}
        rules={treePreset.rules}
        iterations={treePreset.iterations}
        angle={treePreset.angle}
      />
      
      <JuliaSet 
        width={400} 
        height={400} 
        c={classicJulia}
      />
    </div>
  );
}
```

## Interactive Examples

### Mandelbrot Explorer

```tsx
import { useState } from 'react';
import { MandelbrotSet } from 'fractal-react';

function MandelbrotExplorer() {
  const [zoom, setZoom] = useState(1);
  const [centerX, setCenterX] = useState(-0.5);
  const [centerY, setCenterY] = useState(0);
  
  return (
    <div>
      <div>
        <label>Zoom: </label>
        <input 
          type="range" 
          min="0.1" 
          max="10" 
          step="0.1"
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      </div>
      
      <MandelbrotSet 
        width={600} 
        height={600} 
        zoom={zoom}
        centerX={centerX}
        centerY={centerY}
        maxIterations={150}
        colorScheme="rainbow"
      />
    </div>
  );
}
```

### L-System Generator

```tsx
import { useState } from 'react';
import { LSystem } from 'fractal-react';

function LSystemGenerator() {
  const [axiom, setAxiom] = useState("F");
  const [rules, setRules] = useState("F+F-F-F+F");
  const [iterations, setIterations] = useState(4);
  const [angle, setAngle] = useState(90);
  
  return (
    <div>
      <div>
        <label>Axiom: </label>
        <input 
          value={axiom}
          onChange={(e) => setAxiom(e.target.value)}
        />
      </div>
      
      <div>
        <label>Rule for F: </label>
        <input 
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        />
      </div>
      
      <div>
        <label>Iterations: </label>
        <input 
          type="number"
          min="1"
          max="7"
          value={iterations}
          onChange={(e) => setIterations(Number(e.target.value))}
        />
      </div>
      
      <div>
        <label>Angle: </label>
        <input 
          type="number"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
      </div>
      
      <LSystem 
        width={400} 
        height={400} 
        axiom={axiom}
        rules={{ F: rules }}
        iterations={iterations}
        angle={angle}
      />
    </div>
  );
}
```

## Color Schemes

Available color schemes for Mandelbrot and Julia sets:
- `'default'` - Blue to red gradient
- `'rainbow'` - Full spectrum rainbow
- `'grayscale'` - Black to white
- `'fire'` - Black to red to yellow

## Performance Tips

1. **Reduce iterations** for faster rendering on complex sets
2. **Limit points** in Barnsley fern for better performance
3. **Use smaller canvas sizes** for real-time interactive controls
4. **Debounce user inputs** when creating interactive controls

## TypeScript Support

All components are fully typed with TypeScript interfaces exported from the package.

```tsx
import type { MandelbrotProps, JuliaProps, LSystemProps } from 'fractal-react';
```
