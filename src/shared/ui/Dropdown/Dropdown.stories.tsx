import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from 'shared/ui/Button/Button';

import { Dropdown } from './Dropdown';


export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;


const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>qwe</Button>,
    items: [
        {
            content: 'Content 1',
            onClick: () => {return;},
        },
        {
            content: 'Content 2',
            onClick: () => {return;},
        },
        {
            content: 'Content 2',
            onClick: () => {return;},
        }
    ]
};




