module.exports = {
    'stories': ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    'addons': [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            }
        },
        '@storybook/addon-interactions',
        'storybook-addon-themes',
        'storybook-addon-mock'
    ],
    'framework': {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    },
    features: {
        storyStoreV7: false,
    },
};