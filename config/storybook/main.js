module.exports = {
    'stories': [
        '../../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-themes',
        'storybook-addon-mock/register',
        '@storybook/addon-queryparams'
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5'
    }
};