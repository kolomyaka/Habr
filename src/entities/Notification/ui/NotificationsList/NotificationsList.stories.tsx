import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Notification } from '../../model/notification';

import { NotificationsList } from './NotificationsList';

export default {
    title: 'entities/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [],
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => (
    <NotificationsList {...args} />
);

const notification: Notification = {
    id: '1',
    userId: '1',
    title: 'Тайтл уведомления',
    description: 'Описание уведомления',
};

export const Primary = Template.bind({});
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                {
                    ...notification,
                    id: '3',
                    href: 'qwe',
                    description: 'Уведомление с сылкой',
                },
            ],
        },
    ],
};
