/* eslint-disable */
export default {
    displayName: 'your-infinite-storybook-shared-utils-graphql-client-schema',
    preset: '../../../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' }
        ]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../../coverage/libs/your-infinite-storybook/shared/utils/graphql-client-schema'
};
