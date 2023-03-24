import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/types/article';
import { mockedArticle } from '../ArticleList/ArticleList.stories';

const article = mockedArticle;

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;


const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const SmallView = Template.bind({});
SmallView.args = {
    article: article,
    view: ArticleView.SMALL
};

export const BigView = Template.bind({});
BigView.args = {
    article: article,
    view: ArticleView.BIG
};




