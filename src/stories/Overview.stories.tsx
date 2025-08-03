import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MandelbrotSet } from '../components/MandelbrotSet';
import { JuliaSet } from '../components/JuliaSet';
import { KochCurve } from '../components/KochCurve';
import { SierpinskiTriangle } from '../components/SierpinskiTriangle';
import { LSystem } from '../components/LSystem';
import { BarnsleyFern } from '../components/BarnsleyFern';

const FractalShowcase = () => {
  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={titleStyle}>Mandelbrot Set</h3>
        <MandelbrotSet 
          width={280} 
          height={280} 
          maxIterations={100}
          colorScheme="rainbow"
        />
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Julia Set</h3>
        <JuliaSet 
          width={280} 
          height={280} 
          c={{ real: -0.7, imaginary: 0.27015 }}
          maxIterations={100}
          colorScheme="fire"
        />
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Koch Snowflake</h3>
        <KochCurve 
          width={280} 
          height={280} 
          iterations={4}
          strokeColor="#0066cc"
          strokeWidth={2}
        />
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Sierpinski Triangle</h3>
        <SierpinskiTriangle 
          width={280} 
          height={280} 
          iterations={6}
          fillColor="#ff6600"
        />
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>L-System Tree</h3>
        <LSystem 
          width={280} 
          height={280} 
          axiom="F" 
          rules={{ F: "F[+F]F[-F]F" }} 
          iterations={4} 
          angle={25}
          strokeColor="#228B22"
          startY={0.9}
          startAngle={270}
          stepSize={6}
        />
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Barnsley Fern</h3>
        <BarnsleyFern 
          width={280} 
          height={280} 
          points={30000}
          color="#006400"
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof FractalShowcase> = {
  title: 'Fractals/Overview',
  component: FractalShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A showcase of all available fractal components in the library.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFractals: Story = {};

export const CompactView: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      padding: '10px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Mandelbrot</h4>
        <MandelbrotSet width={200} height={200} maxIterations={80} colorScheme="default" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Julia</h4>
        <JuliaSet width={200} height={200} c={{ real: -0.8, imaginary: 0.156 }} maxIterations={80} colorScheme="rainbow" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Koch</h4>
        <KochCurve width={200} height={200} iterations={3} strokeColor="#0066cc" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Sierpinski</h4>
        <SierpinskiTriangle width={200} height={200} iterations={5} fillColor="#ff6600" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>L-System</h4>
        <LSystem width={200} height={200} axiom="F" rules={{ F: "F[+F]F[-F]F" }} iterations={3} angle={25} strokeColor="#228B22" startY={0.9} startAngle={270} stepSize={5} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Barnsley</h4>
        <BarnsleyFern width={200} height={200} points={15000} color="#006400" />
      </div>
    </div>
  ),
};
