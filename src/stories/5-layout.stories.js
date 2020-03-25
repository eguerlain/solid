import React, { Children } from 'react';
import { Layout } from '../ui/layout'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Layout',
    component: Layout,
};

export const FullLayout = () => <Layout title={{
    children: <p onClick={action('Clicked')}>Hello les gens !</p>,
}}>
    <p>Hello !</p>
</Layout >