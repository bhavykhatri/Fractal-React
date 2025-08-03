import type { Meta, StoryObj } from '@storybook/react';
import { MandelbrotSet } from '../components/MandelbrotSet';

const meta: Meta<typeof MandelbrotSet> = {
  title: 'Fractals/MandelbrotSet',
  component: MandelbrotSet,
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
    maxIterations: 100,
    zoom: 1,
    centerX: -0.5,
    centerY: 0,
    colorScheme: 'default',
  },
};

export const HighDetail: Story = {
  args: {
    width: 600,
    height: 600,
    maxIterations: 200,
    zoom: 1,
    centerX: -0.5,
    centerY: 0,
    colorScheme: 'rainbow',
  },
};

export const Zoomed: Story = {
  args: {
    width: 400,
    height: 400,
    maxIterations: 150,
    zoom: 5,
    centerX: -0.235125,
    centerY: 0.827215,
    colorScheme: 'fire',
  },
};
