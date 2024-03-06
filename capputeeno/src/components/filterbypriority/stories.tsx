import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FilterByPriority } from './index';

export default {
  title: 'Components/FilterByPriority',
  component: FilterByPriority,
} as Meta;

export const Default: StoryObj = (args: React.JSX.IntrinsicAttributes) => <FilterByPriority {...args} />;

Default.args = {};