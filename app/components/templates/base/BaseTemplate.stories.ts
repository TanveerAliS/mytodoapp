import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

/**
 * Meta information for the BaseTemplate component story.
 */
const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    // More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} as Meta<typeof BaseTemplate>;

export default meta;

/**
 * Story object representing the BaseTemplate component story.
 */
type Story = StoryObj<typeof meta>;

/**
 * Story for the BaseTemplate component with predefined arguments.
 */
export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
