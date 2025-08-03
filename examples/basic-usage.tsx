import React from 'react';
import { MandelbrotSet, JuliaSet, KochCurve, SierpinskiTriangle, LSystem, BarnsleyFern } from 'fractal-react-components';

function App() {
  return (
    <div style={{ padding: '20px', display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Mandelbrot Set</h2>
        <MandelbrotSet 
          width={400} 
          height={400} 
          maxIterations={100}
          colorScheme="rainbow"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Julia Set</h2>
        <JuliaSet 
          width={400} 
          height={400} 
          c={{ real: -0.7, imaginary: 0.27015 }}
          maxIterations={100}
          colorScheme="fire"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Koch Snowflake</h2>
        <KochCurve 
          width={400} 
          height={400} 
          iterations={4}
          strokeColor="#0066cc"
          strokeWidth={2}
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Sierpinski Triangle</h2>
        <SierpinskiTriangle 
          width={400} 
          height={400} 
          iterations={6}
          fillColor="#ff6600"
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>L-System Tree</h2>
        <LSystem 
          width={400} 
          height={400} 
          axiom="F" 
          rules={{ F: "F[+F]F[-F]F" }} 
          iterations={4} 
          angle={25}
          strokeColor="#228B22"
          startY={0.9}
          startAngle={270}
          stepSize={8}
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Barnsley Fern</h2>
        <BarnsleyFern 
          width={400} 
          height={400} 
          points={30000}
          color="#006400"
        />
      </div>
    </div>
  );
}

export default App;
