import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AvatarImg from '@/shared/assets/tests/avatar.png';

import { Avatar } from './Avatar';


export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;


const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    alt: 'Avatar img'
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
    alt: 'Avatar img'
};