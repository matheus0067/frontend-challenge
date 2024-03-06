import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchInputWSearchLoupe, SearchProps } from '.';

export default {
  title: 'Components/SearchInputWSearchLoupe',
  component: SearchInputWSearchLoupe,
} as Meta;

export const Default: StoryObj<SearchProps> = (args: React.JSX.IntrinsicAttributes & SearchProps) => <SearchInputWSearchLoupe {...args} />;

Default.args = {
  placeholder: 'Procurando por algo específico ?',
};