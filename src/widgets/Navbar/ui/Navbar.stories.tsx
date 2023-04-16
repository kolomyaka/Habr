import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const notAuthorize = Template.bind({});
notAuthorize.args = {};

notAuthorize.decorators = [StoreDecorator({  })];

export const isAuthorize = Template.bind({});
isAuthorize.args = {};

isAuthorize.decorators = [StoreDecorator({ user: { authData: {} } })];



