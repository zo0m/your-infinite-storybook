/* eslint-disable */
export default {
    displayName: 'shared-utils-env-reader',
    preset: '../../../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' }
        ]
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../../coverage/libs/shared/utils/env-reader'
};
