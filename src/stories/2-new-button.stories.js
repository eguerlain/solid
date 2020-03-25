import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../ui/button';
import { Color } from '../ui/style'

export default {
    title: 'Button 2',
    component: Button,
};

export const FullButton = () => <Button
    color={Color.white}
    backgroundColor={Color.blue}
    onClick={action('Clicked')}
    leftIcon="✅"
    onLeftIconClick={action('Left click')}
    rightIcon="❌"
    onRightIconClick={action('Right click')}
>Bonjour</Button>

export const SimpleButton = () => <Button
    onClick={action('Clicked')}
>Bonjour</Button>
