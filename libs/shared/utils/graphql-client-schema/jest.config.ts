/* eslint-disable */
export default {
    displayName: 'shared-utils-graphql-client-schema',
    preset: '../../../../jest.preset.js',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json'
        }
    },
    transform: {
        '^.+\\.[tj]s$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory:
        '../../../../coverage/libs/shared/utils/graphql-client-schema'
};
