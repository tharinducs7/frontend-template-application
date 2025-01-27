export const parser = '@typescript-eslint/parser';
export const parserOptions = {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
};
export const plugins = ['@typescript-eslint'];
export const extendConfigs = [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
];
export const rules = {
    // Add rules as necessary
};
export const settings = {
    react: {
        version: 'detect',
    },
};
  