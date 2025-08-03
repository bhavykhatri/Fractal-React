import type { Meta, StoryObj } from '@storybook/react';
import { BarnsleyFern } from '../components/BarnsleyFern';

const meta: Meta<typeof BarnsleyFern> = {
  title: 'Fractals/BarnsleyFern',
  component: BarnsleyFern,
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
    points: {
      control: { type: 'number', min: 1000, max: 100000, step: 1000 },
    },
    color: {
      control: { type: 'color' },
    },
    pointSize: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 400,
    height: 400,
    points: 50000,
    color: '#008000',
    pointSize: 1,
  },
};

export const LowDetail: Story = {
  args: {
    width: 400,
    height: 400,
    points: 10000,
    color: '#228B22',
    pointSize: 1,
  },
};

export const HighDetail: Story = {
  args: {
    width: 600,
    height: 600,
    points: 80000,
    color: '#006400',
    pointSize: 1,
  },
};

export const LargePoints: Story = {
  args: {
    width: 400,
    height: 400,
    points: 20000,
    color: '#32CD32',
    pointSize: 2,
  },
};

export const BlueGreen: Story = {
  args: {
    width: 400,
    height: 400,
    points: 50000,
    color: '#20B2AA',
    pointSize: 1,
  },
};

export const DarkGreen: Story = {
  args: {
    width: 400,
    height: 400,
    points: 60000,
    color: '#2F4F4F',
    pointSize: 1,
  },
};

export const Emerald: Story = {
  args: {
    width: 400,
    height: 400,
    points: 40000,
    color: '#50C878',
    pointSize: 1.5,
  },
};
