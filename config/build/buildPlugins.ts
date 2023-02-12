import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
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
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        // Плагин для создания глобальных переменных
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        // Плагин для обновления элементов без перезагрузки страницы
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ];
}