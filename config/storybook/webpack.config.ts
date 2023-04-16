import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

// Настраиваем конфиг для сторибука

export default ({ config }: {config: webpack.Configuration}) => {
    const rules = config!.module!.rules as RuleSetRule[];
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: ''
    };
    // Уведовляем СБ о использовании абсолютных импортов
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // Увеодмляем СБ о использовании css-modules
    config!.module!.rules!.push(buildCssLoader(true));
    config!.plugins!.push(new webpack.DefinePlugin({
        '__IS_DEV__': JSON.stringify(true),
        '__API__': JSON.stringify(''),
        '__PROJECT__': JSON.stringify('storybook')
    }));


    return config;
};