import React from 'react';
import { LSystem } from 'fractal-react';
import { lSystemPresets } from 'fractal-react/dist/utils/presets';

function LSystemDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>L-System Fractals Demo</h1>
      <div style={{ 
        display: 'grid', 
        gap: '30px', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
      }}>
        {Object.entries(lSystemPresets).map(([key, preset]) => (
          <div key={key} style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h3>{preset.name}</h3>
            <LSystem 
              width={300} 
              height={300} 
              axiom={preset.axiom}
              rules={preset.rules}
              iterations={preset.iterations}
              angle={preset.angle}
              strokeColor="#228B22"
              strokeWidth={1}
              startY={0.9}
              startAngle={270}
              stepSize={6}
            />
            <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
              <div>Axiom: {preset.axiom}</div>
              <div>Angle: {preset.angle}°</div>
              <div>Iterations: {preset.iterations}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LSystemDemo;
