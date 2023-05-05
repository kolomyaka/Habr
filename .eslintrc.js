module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:boundaries/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    'overrides': [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/jsx-props-no-spreading': 'off'
            }
        },
        {
            files: ['**.config.ts'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    'settings': {
        'react': {
            'version': 'detect'
        },
        'boundaries/elements': [
            { type: 'app', pattern: 'app/*' },
            { type: 'pages', pattern: 'pages/*' },
            { type: 'widgets', pattern: 'widgets/*' },
            { type: 'features', pattern: 'features/*' },
            { type: 'entities', pattern: 'entities/*' },
            { type: 'shared', pattern: 'shared/*' }
        ],
        'boundaries/ignore': ['**/*.test.*'],
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': true
            }
        }
    },
    'rules': {
        'boundaries/element-types': [
            'warn',
            {
                default: 'disallow',
                rules: [
                    { from: 'app', allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
                    { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
                    { from: 'widgets', allow: ['features', 'entities', 'shared'] },
                    { from: 'features', allow: ['entities', 'shared'] },
                    { from: 'entities', allow: ['shared'] },
                    { from: 'shared', allow: ['shared'] }
                ]
            }
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/app/*/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/pages/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/widgets/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/features/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/entities/*/**'] },
                    { message: 'Private imports are prohibited, use public imports instead', group: ['@/shared/*/*/*/**'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/app'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/processes'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/pages'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/widgets'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/features'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/entities'] },
                    { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/shared'] }
                ]
            }
        ],
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'always',
                pathGroups: [
                    { group: 'internal', position: 'after', pattern: '@/pages/**' },
                    { group: 'internal', position: 'after', pattern: '@/widgets/**' },
                    { group: 'internal', position: 'after', pattern: '@/features/**' },
                    { group: 'internal', position: 'after', pattern: '@/entities/**' },
                    { group: 'internal', position: 'after', pattern: '@/shared/**' }
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
            }
        ],


        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        indent: [2,4],
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'max-statements': [2, 20],
        'react/display-name': 'off',
        'object-curly-spacing': [2, 'always'],
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/prop-types': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute:
                    ['to', 'data-testid', 'name', 'target', 'align', 'justify', 'gap', 'direction', 'as']
            }
        ],
        'max-len': ['error', { ignoreComments: true, code: 130 }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
    },
    globals: {
        '__IS_DEV__': true,
        '__API__': true,
        '__PROJECT__': true
    }
};