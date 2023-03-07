import webpack, { RuleSetRule } from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

// Настраиваем конфиг для сторибука

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    // Уведовляем СБ о использовании абсолютных импортов
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // Если находим какое-то правило, которое связано с svg, то добавляем exclude
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // Увеодмляем СБ о использовании css-modules
    config.module.rules.push(buildCssLoader(true));
    config.plugins.push(new webpack.DefinePlugin({
        '__IS_DEV__': true
    }));


    return config;
};