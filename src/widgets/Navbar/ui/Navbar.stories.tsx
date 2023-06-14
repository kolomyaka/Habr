import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NotAuthorize = Template.bind({});
NotAuthorize.args = {};

NotAuthorize.decorators = [StoreDecorator({})];

export const IsAuthorize = Template.bind({});
IsAuthorize.args = {};

IsAuthorize.decorators = [StoreDecorator({ user: { authData: {} } })];
