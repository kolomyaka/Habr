import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextSize, TextTheme } from '../Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'title text',
    description: 'description text',
};

export const TitleOnly = Template.bind({});

TitleOnly.args = {
    title: 'title text',
};

export const DescriptionOnly = Template.bind({});

DescriptionOnly.args = {
    description: 'description text',
};

export const TextError = Template.bind({});

TextError.args = {
    theme: TextTheme.ERROR,
    title: 'title text',
};

export const TextDescription = Template.bind({});

TextDescription.args = {
    theme: TextTheme.ERROR,
    description: 'description text',
};

export const SizeM = Template.bind({});

SizeM.args = {
    title: 'Title text',
    description: 'description text',
    size: TextSize.M,
};

export const SizeL = Template.bind({});

SizeL.args = {
    title: 'Title text',
    description: 'description text',
    size: TextSize.L,
};
