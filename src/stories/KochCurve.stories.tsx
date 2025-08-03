import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KochCurve } from '../components/KochCurve';

const meta: Meta<typeof KochCurve> = {
  title: 'Fractals/KochCurve',
  component: KochCurve,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 800, step: 50 },
    },
    height: {
      control: { type: 'number', min: 100, max: 800, step: 50 },
    },
    iterations: {
      control: { type: 'number', min: 0, max: 6, step: 1 },
    },
    strokeColor: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 'number', min: 0.5, max: 5, step: 0.5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 4,
    strokeColor: '#000000',
    strokeWidth: 1,
  },
};

export const SimpleTriangle: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 0,
    strokeColor: '#0066cc',
    strokeWidth: 2,
  },
};

export const FirstIteration: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 1,
    strokeColor: '#ff6600',
    strokeWidth: 2,
  },
};

export const SecondIteration: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 2,
    strokeColor: '#cc0066',
    strokeWidth: 1.5,
  },
};

export const ThirdIteration: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 3,
    strokeColor: '#9966cc',
    strokeWidth: 1.5,
  },
};

export const HighDetail: Story = {
  args: {
    width: 600,
    height: 600,
    iterations: 5,
    strokeColor: '#0099cc',
    strokeWidth: 1,
  },
};

export const ColorfulThick: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 4,
    strokeColor: '#ff3366',
    strokeWidth: 3,
  },
};

export const SnowflakeProgression: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Iteration 0 (Triangle)</h4>
        <KochCurve width={250} height={250} iterations={0} strokeColor="#0066cc" strokeWidth={2} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Iteration 2</h4>
        <KochCurve width={250} height={250} iterations={2} strokeColor="#cc6600" strokeWidth={1.5} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Iteration 4 (Snowflake)</h4>
        <KochCurve width={250} height={250} iterations={4} strokeColor="#006666" strokeWidth={1} />
      </div>
    </div>
  ),
};
