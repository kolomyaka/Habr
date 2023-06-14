import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'ALL',
    tabs: [
        {
            value: 'ALL',
            content: 'ALL',
        },
        {
            value: 'IT',
            content: 'IT',
        },
        {
            value: 'ECONOMICS',
            content: 'ECONOMICS',
        },
    ],
};
