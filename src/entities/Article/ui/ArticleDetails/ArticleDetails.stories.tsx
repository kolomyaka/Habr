import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetails>;


const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};




