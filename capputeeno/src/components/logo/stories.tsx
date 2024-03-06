import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo, {LogoProps} from '.'

export default {
    title: 'Logo',
    component: Logo,
    argTypes: {
        children: {
            type: 'string'
        }
    } 
} as Meta

export const Default: StoryObj<LogoProps>  = (args: React.JSX.IntrinsicAttributes & LogoProps) => <Logo {...args} />

Default.args = {
    children: 'Capputeeno'
}