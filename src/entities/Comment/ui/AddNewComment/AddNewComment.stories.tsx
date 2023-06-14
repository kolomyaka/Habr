import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config';

import { AddNewComment } from './AddNewComment';

export default {
    title: 'entities/AddNewComment',
    component: AddNewComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => (
    <AddNewComment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg',
            },
        },
    }),
];
