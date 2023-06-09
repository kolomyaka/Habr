
import { RouterDecorator, StoreDecorator, StyleDecorator, ThemeDecorator } from '@/shared/config';
import { Theme } from '@/shared/const/theme';


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
            { name: 'light', class: Theme.LIGHT, color: '#eaefea' },
            { name: 'dark', class: Theme.DARK, color: '#2a2a2c' },
        ],
    },
};

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({})];