import path from 'path';


export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    coverageProvider: 'v8',
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    rootDir: '../../',
    roots: [
        '<rootDir>'
    ],
    testMatch: [
        // Регулярка для нахождения тестовых файлов, чтобы работала на MacOS & Windows
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    },
};
