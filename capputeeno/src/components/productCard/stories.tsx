import { JSX } from "react";
import ProductCard, {ProductCardProps} from ".";
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'ProductCard',
    component: ProductCard,
    args: {
        title: 'Caneca de cerâmica rústica',
        img: 'https://source.unsplash.com/user/willianjusten/300x140',
        price: 'R$ 89, 00'
    }
} as Meta

export const Default: StoryObj<ProductCardProps> = (args: JSX.IntrinsicAttributes & ProductCardProps) => (
    <div style={{ width: '25.6rem', height: '30rem' }}>
      <ProductCard {...args} />
    </div>
  )
Default.args = {};