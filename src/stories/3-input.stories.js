import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from '../ui/input';

export default {
    title: 'Input',
    component: Input,
};

export const FullInput = () => <Input placeholder="Coucou" onAction={action('Clicked')} buttonLabel="Click me!" />
