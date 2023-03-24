import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { mockedArticle } from 'entities/Article/ui/ArticleList/ArticleList.stories';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const article = mockedArticle;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: false,
        ids: ['1'],
        entities: {
            '1': article
        }
    }
})];