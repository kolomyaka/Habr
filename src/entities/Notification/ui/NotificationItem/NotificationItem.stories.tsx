import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    notification: {
        id: '1',
        userId: '1',
        title: 'Notification title',
        description: 'Notification description',
    },
};
