import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleList } from './ArticleList';

const mockedArticle = {
    id: '1',
    title: 'Javascript news qwe qwe qweasd asd',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: {
        id: '1',
        username: 'Kolomyaka',
        avatar: 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg',
    },
    createdAt: '26.02.2022',
    type: ['IT', 'SCIENCE', 'POLITICS', 'ECONOMICS'],
    blocks: [],
};

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        articles: [mockedArticle, mockedArticle, mockedArticle],
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const SmallView = Template.bind({});
SmallView.args = {};

export const BigView = Template.bind({});
BigView.args = {
    view: 'big',
};

export const isLoadingSmall = Template.bind({});
isLoadingSmall.args = {
    isLoading: true,
};

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    isLoading: true,
    view: 'big',
};
