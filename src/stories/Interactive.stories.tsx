import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MandelbrotSet } from '../components/MandelbrotSet';
import { JuliaSet } from '../components/JuliaSet';

const InteractiveComparison = () => {
  const [mandelbrotIterations, setMandelbrotIterations] = useState(100);
  const [mandelbrotColorScheme, setMandelbrotColorScheme] = useState<'default' | 'rainbow' | 'grayscale' | 'fire'>('rainbow');
  const [juliaReal, setJuliaReal] = useState(-0.7);
  const [juliaImaginary, setJuliaImaginary] = useState(0.27015);
  const [juliaColorScheme, setJuliaColorScheme] = useState<'default' | 'rainbow' | 'grayscale' | 'fire'>('fire');

  const containerStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const controlsStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  };

  const controlGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '4px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const fractalContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'center',
  };

  const fractalCardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Interactive Fractal Comparison</h2>
      
      <div style={controlsStyle}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Mandelbrot Controls</h3>
          <div style={controlGroupStyle}>
            <div>
              <div style={labelStyle}>Iterations: {mandelbrotIterations}</div>
              <input
                type="range"
                min="50"
                max="300"
                value={mandelbrotIterations}
                onChange={(e) => setMandelbrotIterations(Number(e.target.value))}
                style={inputStyle}
              />
            </div>
            <div>
              <div style={labelStyle}>Color Scheme</div>
              <select
                value={mandelbrotColorScheme}
                onChange={(e) => setMandelbrotColorScheme(e.target.value as any)}
                style={inputStyle}
              >
                <option value="default">Default</option>
                <option value="rainbow">Rainbow</option>
                <option value="grayscale">Grayscale</option>
                <option value="fire">Fire</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Julia Set Controls</h3>
          <div style={controlGroupStyle}>
            <div>
              <div style={labelStyle}>Real Part: {juliaReal.toFixed(3)}</div>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.01"
                value={juliaReal}
                onChange={(e) => setJuliaReal(Number(e.target.value))}
                style={inputStyle}
              />
            </div>
            <div>
              <div style={labelStyle}>Imaginary Part: {juliaImaginary.toFixed(3)}</div>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.01"
                value={juliaImaginary}
                onChange={(e) => setJuliaImaginary(Number(e.target.value))}
                style={inputStyle}
              />
            </div>
            <div>
              <div style={labelStyle}>Color Scheme</div>
              <select
                value={juliaColorScheme}
                onChange={(e) => setJuliaColorScheme(e.target.value as any)}
                style={inputStyle}
              >
                <option value="default">Default</option>
                <option value="rainbow">Rainbow</option>
                <option value="grayscale">Grayscale</option>
                <option value="fire">Fire</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div style={fractalContainerStyle}>
        <div style={fractalCardStyle}>
          <h3 style={{ margin: '0 0 16px 0' }}>Mandelbrot Set</h3>
          <MandelbrotSet
            width={350}
            height={350}
            maxIterations={mandelbrotIterations}
            colorScheme={mandelbrotColorScheme}
          />
        </div>

        <div style={fractalCardStyle}>
          <h3 style={{ margin: '0 0 16px 0' }}>Julia Set</h3>
          <JuliaSet
            width={350}
            height={350}
            c={{ real: juliaReal, imaginary: juliaImaginary }}
            maxIterations={100}
            colorScheme={juliaColorScheme}
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof InteractiveComparison> = {
  title: 'Fractals/Interactive',
  component: InteractiveComparison,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive comparison tool for exploring fractal parameters in real-time.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MandelbrotVsJulia: Story = {};
