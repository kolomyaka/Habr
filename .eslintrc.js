module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/jsx-indent": [2, 4, { indentLogicalExpressions: true }],
        indent: [2,4],
        "react/jsx-props-no-spreading": "warn",
        "react/react-in-jsx-scope": "off",
        "max-statements": [2, 15],
        "object-curly-spacing": [2, "always"],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    globals: {
        "__IS_DEV__": true
    }
};
