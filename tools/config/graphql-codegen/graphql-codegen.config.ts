import type {CodegenConfig} from '@graphql-codegen/cli';

import {
    baseTypesPath,
    commonSchemaTypesPath,
    libsFolder,
    schema
} from "../../utils/graphql-codegen";

const config: CodegenConfig = {
    overwrite: true,
    schema: schema,
    config: {
        declarationKind: 'interface',
        addExplicitOverride: true
    },
    generates: {
        [commonSchemaTypesPath]: {
            plugins: ['typescript']
        },
        [libsFolder]: {
            documents: [
                'libs/shared/*.graphql'
            ],
            preset: 'near-operation-file',
            presetConfig: {
                folder: '__generated__',
                extension: '.graphql.ts',
                baseTypesPath: baseTypesPath
            },
            plugins: ['typescript-operations', 'typescript-apollo-angular'],
            config: {
                preResolveTypes: true
            }
        }
    }
};

export default config;
