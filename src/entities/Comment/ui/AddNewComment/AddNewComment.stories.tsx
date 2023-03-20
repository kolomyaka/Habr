import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddNewComment } from './AddNewComment';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/AddNewComment',
    component: AddNewComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewComment>;


const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            avatar: 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg'
        }
    }
})];




