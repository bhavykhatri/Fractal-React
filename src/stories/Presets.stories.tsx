import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LSystem } from '../components/LSystem';
import { JuliaSet } from '../components/JuliaSet';
import { lSystemPresets, juliaSetPresets } from '../utils/presets';

const PresetGallery = () => {
  const containerStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '40px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  };

  const cardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  };

  const cardTitleStyle: React.CSSProperties = {
    margin: '0 0 12px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#555',
  };

  const infoStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#666',
    marginTop: '8px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    padding: '8px',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...titleStyle, fontSize: '32px', marginBottom: '40px' }}>Fractal Preset Gallery</h1>
      
      <div style={sectionStyle}>
        <h2 style={titleStyle}>L-System Presets</h2>
        <div style={gridStyle}>
          {Object.entries(lSystemPresets).map(([key, preset]) => (
            <div key={key} style={cardStyle}>
              <h3 style={cardTitleStyle}>{preset.name}</h3>
              <LSystem 
                width={250} 
                height={250} 
                axiom={preset.axiom}
                rules={preset.rules}
                iterations={preset.iterations}
                angle={preset.angle}
                strokeColor="#228B22"
                strokeWidth={1}
                startY={0.9}
                startAngle={270}
                stepSize={key === 'dragonCurve' ? 3 : key === 'plant' ? 4 : 6}
                startX={key === 'dragonCurve' ? 0.3 : key === 'sierpinskiTriangle' ? 0.2 : 0.5}
              />
              <div style={infoStyle}>
                <div><strong>Axiom:</strong> {preset.axiom}</div>
                <div><strong>Angle:</strong> {preset.angle}°</div>
                <div><strong>Iterations:</strong> {preset.iterations}</div>
                <div><strong>Rules:</strong></div>
                {Object.entries(preset.rules).map(([symbol, rule]) => (
                  <div key={symbol} style={{ marginLeft: '8px' }}>
                    {symbol} → {rule}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={titleStyle}>Julia Set Presets</h2>
        <div style={gridStyle}>
          {Object.entries(juliaSetPresets).map(([key, preset]) => (
            <div key={key} style={cardStyle}>
              <h3 style={cardTitleStyle}>{preset.name}</h3>
              <JuliaSet 
                width={250} 
                height={250} 
                c={{ real: preset.real, imaginary: preset.imaginary }}
                maxIterations={100}
                colorScheme="rainbow"
              />
              <div style={infoStyle}>
                <div><strong>Complex constant:</strong></div>
                <div>Real: {preset.real}</div>
                <div>Imaginary: {preset.imaginary}</div>
                <div><strong>Formula:</strong> z² + c</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof PresetGallery> = {
  title: 'Fractals/Presets',
  component: PresetGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive gallery showcasing all available preset configurations for L-Systems and Julia Sets.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPresets: Story = {};

export const LSystemsOnly: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>L-System Presets</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {Object.entries(lSystemPresets).slice(0, 4).map(([key, preset]) => (
          <div key={key} style={{
            textAlign: 'center',
            padding: '16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>{preset.name}</h3>
            <LSystem 
              width={280} 
              height={280} 
              axiom={preset.axiom}
              rules={preset.rules}
              iterations={preset.iterations}
              angle={preset.angle}
              strokeColor="#228B22"
              strokeWidth={1}
              startY={0.9}
              startAngle={270}
              stepSize={key === 'plant' ? 4 : 6}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const JuliaSetsOnly: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Julia Set Presets</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {Object.entries(juliaSetPresets).slice(0, 6).map(([key, preset]) => (
          <div key={key} style={{
            textAlign: 'center',
            padding: '16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>{preset.name}</h3>
            <JuliaSet 
              width={280} 
              height={280} 
              c={{ real: preset.real, imaginary: preset.imaginary }}
              maxIterations={100}
              colorScheme="fire"
            />
            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
              c = {preset.real} + {preset.imaginary}i
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
