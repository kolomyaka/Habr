import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ErrorFallback } from './ErrorFallback';

export default {
    title: 'widgets/ErrorFallback',
    component: ErrorFallback,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorFallback>;

const Template: ComponentStory<typeof ErrorFallback> = (args) => (
    <ErrorFallback {...args} />
);

export const ErrorComponent = Template.bind({});
ErrorComponent.args = {
    error: new Error('Текст ошибки'),
};
