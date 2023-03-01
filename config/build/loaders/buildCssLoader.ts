import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Если дев-сборка, то оставляем css внутри js файла, если же прод, то выносим в отдельные css файлы
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Регулярка для файлов, которые будем обрабатывать в этом лоадере
                        auto: /\.module\.\w+$/i,
                        // Отображение названия файлов в зависимости от сборки
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                        exportLocalsConvention: 'camelCaseOnly',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
};