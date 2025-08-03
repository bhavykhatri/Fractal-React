import type { Meta, StoryObj } from '@storybook/react';
import { LSystem } from '../components/LSystem';

const meta: Meta<typeof LSystem> = {
  title: 'Fractals/LSystem',
  component: LSystem,
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
    axiom: {
      control: { type: 'text' },
    },
    rules: {
      control: { type: 'object' },
    },
    iterations: {
      control: { type: 'number', min: 1, max: 7, step: 1 },
    },
    angle: {
      control: { type: 'number', min: 5, max: 180, step: 5 },
    },
    strokeColor: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 'number', min: 0.5, max: 5, step: 0.5 },
    },
    startX: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
    },
    startY: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
    },
    startAngle: {
      control: { type: 'number', min: 0, max: 360, step: 15 },
    },
    stepSize: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "F",
    rules: { F: "F+F-F-F+F" },
    iterations: 4,
    angle: 90,
    strokeColor: '#228B22',
    strokeWidth: 1,
    startX: 0.5,
    startY: 0.9,
    startAngle: 270,
    stepSize: 10,
  },
};

export const SimpleTree: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "F",
    rules: { F: "F[+F]F[-F]F" },
    iterations: 4,
    angle: 25,
    strokeColor: '#228B22',
    strokeWidth: 1,
    startX: 0.5,
    startY: 0.9,
    startAngle: 270,
    stepSize: 8,
  },
};

export const FractalTree: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "F",
    rules: { F: "FF+[+F-F-F]-[-F+F+F]" },
    iterations: 4,
    angle: 22.5,
    strokeColor: '#8B4513',
    strokeWidth: 1,
    startX: 0.5,
    startY: 0.9,
    startAngle: 270,
    stepSize: 6,
  },
};

export const Plant: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "X",
    rules: {
      X: "F+[[X]-X]-F[-FX]+X",
      F: "FF"
    },
    iterations: 5,
    angle: 25,
    strokeColor: '#32CD32',
    strokeWidth: 1,
    startX: 0.5,
    startY: 0.9,
    startAngle: 270,
    stepSize: 4,
  },
};

export const DragonCurve: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "FX",
    rules: {
      X: "X+YF+",
      Y: "-FX-Y"
    },
    iterations: 10,
    angle: 90,
    strokeColor: '#DC143C',
    strokeWidth: 1,
    startX: 0.3,
    startY: 0.5,
    startAngle: 0,
    stepSize: 3,
  },
};

export const SierpinskiTriangleLSystem: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "F-G-G",
    rules: { 
      F: "F-G+F+G-F",
      G: "GG"
    },
    iterations: 4,
    angle: 120,
    strokeColor: '#8A2BE2',
    strokeWidth: 1,
    startX: 0.2,
    startY: 0.8,
    startAngle: 0,
    stepSize: 8,
  },
};

export const KochCurveLSystem: Story = {
  args: {
    width: 400,
    height: 400,
    axiom: "F",
    rules: { F: "F+F-F-F+F" },
    iterations: 4,
    angle: 90,
    strokeColor: '#4169E1',
    strokeWidth: 2,
    startX: 0.1,
    startY: 0.7,
    startAngle: 0,
    stepSize: 6,
  },
};
