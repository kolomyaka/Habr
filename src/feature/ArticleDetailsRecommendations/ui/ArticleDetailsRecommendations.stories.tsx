import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsRecommendations } from './ArticleDetailsRecommendations';


export default {
    title: 'features/ArticleDetailsRecommendations',
    component: ArticleDetailsRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsRecommendations>;


const Template: ComponentStory<typeof ArticleDetailsRecommendations> = (args) =>
    <ArticleDetailsRecommendations {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];




