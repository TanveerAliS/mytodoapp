import type { Meta, StoryObj } from '@storybook/react';
import Primary from './Primary';
import { mockPrimaryProps } from './Primary.mocks';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'layouts/Primary',
  component: Primary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Primary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...mockPrimaryProps.base,
  },
};
