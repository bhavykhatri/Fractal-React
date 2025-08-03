import type { Meta, StoryObj } from '@storybook/react';
import { SierpinskiTriangle } from '../components/SierpinskiTriangle';

const meta: Meta<typeof SierpinskiTriangle> = {
  title: 'Fractals/SierpinskiTriangle',
  component: SierpinskiTriangle,
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
      control: { type: 'number', min: 0, max: 8, step: 1 },
    },
    fillColor: {
      control: { type: 'color' },
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
    iterations: 6,
    fillColor: '#000000',
    strokeColor: '#000000',
    strokeWidth: 1,
  },
};

export const SimpleTriangle: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 0,
    fillColor: '#0066cc',
    strokeColor: '#0066cc',
    strokeWidth: 1,
  },
};

export const FirstIteration: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 1,
    fillColor: '#ff6600',
    strokeColor: '#ff6600',
    strokeWidth: 1,
  },
};

export const ThirdIteration: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 3,
    fillColor: '#cc0066',
    strokeColor: '#cc0066',
    strokeWidth: 1,
  },
};

export const HighDetail: Story = {
  args: {
    width: 600,
    height: 600,
    iterations: 7,
    fillColor: '#009933',
    strokeColor: '#009933',
    strokeWidth: 1,
  },
};

export const Orange: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 6,
    fillColor: '#ff9900',
    strokeColor: '#ff9900',
    strokeWidth: 1,
  },
};

export const Purple: Story = {
  args: {
    width: 400,
    height: 400,
    iterations: 5,
    fillColor: '#9966cc',
    strokeColor: '#9966cc',
    strokeWidth: 1,
  },
};
