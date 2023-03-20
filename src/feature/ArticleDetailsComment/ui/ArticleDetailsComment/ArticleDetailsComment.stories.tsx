import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsComment from './ArticleDetailsComment';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleDetailsComment',
    component: ArticleDetailsComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComment>;


const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <ArticleDetailsComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: {
        authData: {
            avatar: 'https://gravatar.com/avatar/d79a01fc6611be42996b4f3a6994?s=400&d=monsterid&r=x'
        }
    },
    articleDetailsCommentForm: {
        text: 'Comment text'
    },
    articleDetailsComments: {
        ids: ['1'],
        entities: {
            '1': {
                id: '1',
                text: 'Comment text',
                user: {
                    username: 'Username',
                    avatar: 'https://gravatar.com/avatar/d79a01fc6611be42996b4f3a6994?s=400&d=monsterid&r=x'
                }
            }
        }
    }
})];




