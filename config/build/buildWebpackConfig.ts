import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';


export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { paths, mode, isDev } = options;
    // Различные правила конфига декомпозировали в отдельные функции
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        // Когда вебпак собирает весь наш исходный код в один файл (bundle.js), может быть сложно отследить ошибку
        // В одном из файлов, который будет добавлен в bundle.js и если один из файлов будет содержать ошибку, то
        // источником будет bundle.js. Этой настройкой webpack будет генерить мапу и можно будет узнать откуда ошибка
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}