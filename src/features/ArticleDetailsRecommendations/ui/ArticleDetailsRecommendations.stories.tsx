import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Article } from '@/entities/Article';

import { StoreDecorator } from '@/shared/config';

import { ArticleDetailsRecommendations } from './ArticleDetailsRecommendations';

export default {
    title: 'features/ArticleDetailsRecommendations',
    component: ArticleDetailsRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [],
} as ComponentMeta<typeof ArticleDetailsRecommendations>;

const Template: ComponentStory<typeof ArticleDetailsRecommendations> = (args) =>
    <ArticleDetailsRecommendations {...args} />;

const article: Article = {
    id: '1',
    img: 'https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png',
    createdAt: '21.03.2001',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: ['IT'],
    title: 'Название статьи',
    subtitle: 'Подзаголовок статьи'
};

export const Primary = Template.bind({});
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ]
        },
    ],
};
Primary.args = {};
Primary.decorators = [StoreDecorator({})];




