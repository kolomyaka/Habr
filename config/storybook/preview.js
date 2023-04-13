import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

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