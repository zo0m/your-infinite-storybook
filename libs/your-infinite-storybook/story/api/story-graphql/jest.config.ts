/* eslint-disable */
export default {
    displayName: 'your-infinite-storybook-story-api-story-graphql',
    preset: '../../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' }
        ]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../../coverage/libs/your-infinite-storybook/story/api/story-graphql'
};