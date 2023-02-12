import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";



export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // Функция, которая возвращает список лоадеров в конфиге

    // Для каждого лоадера создаем отдельную переменную, чтобы удобнее было следить за порядком лоадеров

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Если дев-сборка, то оставляем css внутри js файла, если же прод, то выносим в отдельные css файлы
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // Регулярка для файлов, которые будем обрабатывать в этом лоадере
                        auto: /\.module\.\w+$/i,
                        // Отображение названия файлов в зависимости от сборки
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]"
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // Если не используем typescript, то нужен бы был babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [
        typeScriptLoader,
        stylesLoader,
        svgLoader,
        fileLoader
    ];
}