import { addDecorator } from '@storybook/react';

import { RouterDecorator , StoreDecorator , StyleDecorator , ThemeDecorator } from '@/shared/config';
import { Theme } from '@/shared/const/theme';

// Добавляем декораторы - Функции, которые оборачивают Стори (Какие-то общие стили, темы и т.д)
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(StoreDecorator({}));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        icon: 'globe',
        default: 'light',
        list: [
            { name: 'light', class: [Theme.LIGHT], color: '#11ea11' },
            { name: 'dark', class: [Theme.DARK], color: '#0c0c69' },
        ],
        target: '#root'
    },

};