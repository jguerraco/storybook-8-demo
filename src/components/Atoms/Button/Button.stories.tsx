import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'button',
    onClick: () => {},
    label: 'Button',
    size: 'medium',
    variant: 'primary',
  },
};
Default.args = {
  id: 'button',
  onClick: () => {},
  label: 'Button',
  size: 'medium',
  variant: 'primary',
};

export const Big: Story = {
  args: {
    id: "button",
    label: "Button",
    size: "large",
    variant: "primary",
    onClick: () => {}
  }
};

export const Secondary: Story = {
  args: {
    id: "button",
    label: "Button",
    size: "medium",
    variant: "secondary",
    onClick: () => {}
  }
};