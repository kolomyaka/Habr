import path from 'path';

import dotenv from 'dotenv';
import Webpack from 'webpack';

import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => {
    // Указываем переменные для конфига, которые потом передадим в объект настроек и передадим в функцию

    // Указываем пути
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    };
    // Смотрим в какой среде текущая сборка (дев, продакшн)
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';

    // В зависимости от среды сборки смотрим из какого файла нужны .env-переменные
    dotenv.config({
        path: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`)
    });
    const apiUrl = process.env.apiUrl || 'http://localhost:8000';
    const PORT = process.env.port || 3000;

    // Конфигурируем конфиг webpack
    // Декомпозировали конфиг вебпака в отдельную функцию
    const config: Webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        PORT,
        project: 'frontend'
    });

    return config;
};