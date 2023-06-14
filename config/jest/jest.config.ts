import path from 'path';

export default {
    // Так как наша тестовая среда не знает о переменных конфига (is_dev), то необходимо в конфиге указать их
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    moduleDirectories: ['node_modules', 'src'],
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports/unit',
                inlineSource: true,
                openReport: false,
                filename: 'report.html',
            },
        ],
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    rootDir: '../../',
    roots: ['<rootDir>'],
    testMatch: [
        // Регулярка для нахождения тестовых файлов, чтобы работала на MacOS & Windows
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^@/(.*)$': '<rootDir>src/$1',
    },
};
