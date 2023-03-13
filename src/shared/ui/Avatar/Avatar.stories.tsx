import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from '../../assets/tests/avatar.png';

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