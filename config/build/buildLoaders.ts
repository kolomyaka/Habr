import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {
        isDev
    } = options;

    // Функция, которая возвращает список лоадеров в конфиге

    // Для каждого лоадера создаем отдельную переменную, чтобы удобнее было следить за порядком лоадеров

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const stylesLoader = buildCssLoader(isDev);

    // Если не используем typescript, то нужен бы был babel-loader
    // const typeScriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    return [
        // typeScriptLoader,
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        stylesLoader,
    ];
}