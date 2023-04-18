import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';


export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;


const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};




