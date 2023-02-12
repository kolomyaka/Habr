import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({ PORT }: BuildOptions): DevServerConfiguration {
    // Функция для дев-сервера при разработке
    return {
        port: PORT,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}