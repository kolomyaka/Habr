import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppCheckbox } from './AppCheckbox';

export default {
    title: 'shared/AppCheckbox',
    component: AppCheckbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppCheckbox>;


const Template: ComponentStory<typeof AppCheckbox> = (args) => <AppCheckbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

