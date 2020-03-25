import React from 'react';
import { action } from '@storybook/addon-actions';
import { Title } from '../ui/title';

export default {
    title: 'Title',
    component: Title,
};

export const FullTitle = () => <Title leftIcon={<p>🔙</p>}>Hello le monde</Title>