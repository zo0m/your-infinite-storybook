/* eslint-disable */
export default {
    displayName: 'your-infinite-storybook-message-api-message-model',
    preset: '../../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' }
        ]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory:
        '../../../../../coverage/libs/your-infinite-storybook/message/api/message-model'
};
