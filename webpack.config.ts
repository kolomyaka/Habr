import path from 'path';
import webpack from 'webpack';
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';
import dotenv from 'dotenv';

export default (env: BuildEnv) => {
    // Указываем переменные для конфига, которые потом передадим в объект настроек и передадим в функцию

    // Указываем пути
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    // Смотрим в какой среде текущая сборка (дев, продакшн)
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    // В зависимости от среды сборки смотрим из какого файла нужны .env-переменные
    dotenv.config({
        path: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`)
    });
    const PORT = process.env.port || 3000;

    // Конфигурируем конфиг webpack
    // Декомпозировали конфиг вебпака в отдельную функцию
    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        PORT,
        project: 'frontend'
    });

    return config;
};