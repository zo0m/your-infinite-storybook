import { ConfigService, registerAs } from '@nestjs/config';

import { getBoolEnv } from '@your-infinite-storybook/shared/utils/env-reader';

const configToken = 'graphql';

interface GraphQLConfig {
    schemaPath: string;
    debug: boolean;
    playground: boolean;
}

const mapEnv2GraphQLConfig = (): GraphQLConfig => ({
    debug: getBoolEnv(process.env.GQL_DEBUG, true),
    playground: getBoolEnv(process.env.GQL_PLAYGROUND, true),
    schemaPath: process.env.GQL_SCHEMA_PATH ?? 'schema.graphql'
});

export const graphQLConfigFactory = registerAs<GraphQLConfig>(
    configToken,
    mapEnv2GraphQLConfig
);

export const getGraphQLConfig = (
    configService: ConfigService
): GraphQLConfig => {
    return configService.get(configToken);
};
