import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    // Функция, которая возвращает список плагинов в конфиге
    return [
        // Плагин для html  странички, в настройках указываем темплейт нашей html странички из public
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        // Плагин, который позволяет посмотреть отчет при компиляции
        new webpack.ProgressPlugin(),
        // Плагин, который будет генерить css файлы отдельно от js-кода при сборке в прод
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}