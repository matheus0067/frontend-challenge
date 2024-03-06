import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CartControl } from '.';

export default {
  title: 'Components/CartControl',
  component: CartControl,
} as Meta;

export const Default: StoryObj = (args: React.JSX.IntrinsicAttributes) => <CartControl {...args} />;

Default.args = {};