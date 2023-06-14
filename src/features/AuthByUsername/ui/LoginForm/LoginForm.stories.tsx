import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config';

import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});

Primary.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];

export const WithError = Template.bind({});

WithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: 'Invalid username or password',
        },
    }),
];

export const Loading = Template.bind({});

Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: true,
        },
    }),
];
