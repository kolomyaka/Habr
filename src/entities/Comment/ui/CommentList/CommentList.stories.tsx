import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentList } from './CommentList';


export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;


const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            user: {
                id: '1',
                avatar: 'https://gravatar.com/avatar/d79a01fc6611be42996b4f3a6994?s=400&d=monsterid&r=x',
                username: 'Kolomyaka'
            },
            text: 'Comment text'
        },
        {
            id: '2',
            user: {
                id: '1',
                avatar: 'https://gravatar.com/avatar/d79a01fc6611be42996b4f3a6994?s=400&d=monsterid&r=x',
                username: 'Kolomyaka'
            },
            text: 'Comment text 2'
        }
    ]
};

export const Loader = Template.bind({});
Loader.args = {
    isLoading: true
};



