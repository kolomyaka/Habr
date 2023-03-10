import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppNavLink, AppNavLinkTheme } from './AppNavLink';

export default {
    title: 'shared/AppNavLink',
    component: AppNavLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppNavLink>;


const Template: ComponentStory<typeof AppNavLink> = (args) => <AppNavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppNavLinkTheme.PRIMARY
};
