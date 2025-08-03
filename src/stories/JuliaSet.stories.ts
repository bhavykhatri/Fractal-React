import type { Meta, StoryObj } from '@storybook/react';
import { JuliaSet } from '../components/JuliaSet';

const meta: Meta<typeof JuliaSet> = {
  title: 'Fractals/JuliaSet',
  component: JuliaSet,
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
    c: {
      control: { type: 'object' },
    },
    maxIterations: {
      control: { type: 'number', min: 10, max: 500, step: 10 },
    },
    zoom: {
      control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
    },
    centerX: {
      control: { type: 'number', min: -2, max: 2, step: 0.1 },
    },
    centerY: {
      control: { type: 'number', min: -2, max: 2, step: 0.1 },
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['default', 'rainbow', 'grayscale', 'fire'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.7, imaginary: 0.27015 },
    maxIterations: 100,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'default',
  },
};

export const Classic: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.7, imaginary: 0.27015 },
    maxIterations: 150,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'rainbow',
  },
};

export const Spiral: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.8, imaginary: 0.156 },
    maxIterations: 100,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'fire',
  },
};

export const Lightning: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.4, imaginary: 0.6 },
    maxIterations: 120,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'default',
  },
};

export const DouadyRabbit: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.123, imaginary: 0.745 },
    maxIterations: 150,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'grayscale',
  },
};

export const Airplane: Story = {
  args: {
    width: 400,
    height: 400,
    c: { real: -0.7269, imaginary: 0.1889 },
    maxIterations: 100,
    zoom: 1,
    centerX: 0,
    centerY: 0,
    colorScheme: 'rainbow',
  },
};
