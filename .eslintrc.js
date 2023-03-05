module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'no-console': 'warn',
        'no-unused-vars': 'off',
        // 'func-names': 'off',
        // 'spaced-comment': 'off',
        // 'consistent-return': 'off',
        // 'object-shorthand': 'off',
        // 'no-process-exit': 'off',
        // 'no-param-reassign': 'off',
        // 'no-return-await': 'off',
        // 'no-underscore-dangle': 'off',
        // 'class-methods-use-this': 'off',
        // 'prefer-destructuring': ['error', { object: true, array: false }],
        // 'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }],
    },
};
