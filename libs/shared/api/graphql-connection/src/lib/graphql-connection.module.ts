import { Context } from '@apollo/client';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DynamicModule, Module } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

import { extendContextWithDataLoader } from '@your-infinite-storybook/shared/api/graphql-dataloader-extend-context';

import { getContext } from './get-context';
import { getGraphQLConfig } from './graphql.config';

type GraphQLEntitiesModules = ModuleMetadata['imports'] &
    ModuleMetadata['exports'];

@Module({})
export class GraphQLConnectionModule {
    static forRoot(options: {
        entitiesModules: GraphQLEntitiesModules;
    }): DynamicModule {
        return {
            module: GraphQLConnectionModule,
            imports: [
                ...options.entitiesModules,

                GraphQLModule.forRootAsync<ApolloDriverConfig>({
                    driver: ApolloDriver,
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory
                })
            ],
            exports: [GraphQLModule, ...options.entitiesModules]
        };
    }
}

const useFactory = async (configService: ConfigService) => {
    const graphQLConfig = getGraphQLConfig(configService);

    const { schemaPath, playground, debug } = graphQLConfig;

    const schemaGraphQLFilePath = path.resolve(__dirname, schemaPath);

    const gqlPath = '/';

    const subscriptionsConfig = {
        'graphql-ws': {
            path: gqlPath,
            onConnect: (context: Context) => {
                const { extra } = context;
                extendContextWithDataLoader(extra);
            }
        },
        'subscriptions-transport-ws': {
            path: gqlPath,
            onConnect: () => {
                return extendContextWithDataLoader();
            }
        }
    };

    return {
        playground,
        debug,
        path: gqlPath,
        autoSchemaFile: schemaGraphQLFilePath,
        subscriptions: subscriptionsConfig,
        context: getContext
    };
};
