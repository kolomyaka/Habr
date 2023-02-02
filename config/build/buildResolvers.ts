import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    // Функция, которая отдает список расширений, которые не нужно будет указывать при импорте
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}