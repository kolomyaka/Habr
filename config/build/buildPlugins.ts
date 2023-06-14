import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin  from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {

    const isProd = !isDev;

    const plugins = [
        // Плагин для html  странички, в настройках указываем темплейт нашей html странички из public
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        // Плагин, который позволяет посмотреть отчет при компиляции
        new webpack.ProgressPlugin(),
        // Плагин для создания глобальных переменных
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new ReactRefreshWebpackPlugin(),
    ];

    if (isDev) {
        // Плагин для обновления элементов без перезагрузки страницы
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // Плагин для анализа размеров сборки приложения
        // plugins.push(new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        //     analyzerMode: 'static'
        // }));
        plugins.push(new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }));
        plugins.push(new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }));
    }

    if (isProd) {
        plugins.push(
            // Плагин, который будет генерить css файлы отдельно от js-кода при сборке в прод
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),);
        plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: paths.locales, to: paths.buildLocales },
                ],
            }),
        );
    }

    // Функция, которая возвращает список плагинов в конфиге
    return plugins;
}