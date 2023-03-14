import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';


export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;


const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};




