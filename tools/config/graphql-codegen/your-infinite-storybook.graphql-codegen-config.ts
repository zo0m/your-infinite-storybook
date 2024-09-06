import {CodegenConfig} from "@graphql-codegen/cli";

import {
    libsFolder,
    schema
} from "../../utils/graphql-codegen";

const appName = 'your-infinite-storybook';
const baseTypesName = `${appName}.graph-ql.client.types.d.ts`;
const baseTypesRootPath = `your-infinite-storybook/shared/utils/graphql-client-schema/src/lib/__generated__`;
const baseTypesPath = `${baseTypesRootPath}/${baseTypesName}`;
const commonSchemaTypesPath = `libs/${baseTypesPath}`;

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
                `libs/${appName}/**/*.graphql`
            ],
            preset: 'near-operation-file',
            presetConfig: {
                folder: '__generated__',
                extension: '.graphql.ts',
                baseTypesPath: baseTypesPath,
                importTypesNamespace: 'YourInfiniteStorybookGraphQlClientTypes'
            },
            plugins: ['typescript-operations', 'typescript-apollo-angular'],
            config: {
                preResolveTypes: true
            }
        }
    }
};

export default config;
