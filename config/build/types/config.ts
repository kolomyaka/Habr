export type BuildMode = 'production' | 'development'

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    PORT: number | string;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest'
}