import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer({ PORT }: BuildOptions): DevServerConfiguration {
    // Функция для дев-сервера при разработке
    return {
        port: PORT,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}