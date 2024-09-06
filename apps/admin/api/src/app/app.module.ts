import { Module } from '@nestjs/common';

import { AppConfigurationModule } from '@your-infinite-storybook/shared/api/app-configuration';
import { GraphQLConnectionModule } from '@your-infinite-storybook/shared/api/graphql-connection';
import { TypeOrmConnectionModule } from '@your-infinite-storybook/shared/api/typeorm-connection';

import {
    appConfigFactories,
    graphQLEntitiesModules,
    typeOrmEntities
} from './app-configuration';
import { AppController } from './app.controller';

@Module({
    imports: [
        AppConfigurationModule.forRoot({
            configFactories: appConfigFactories
        }),
        TypeOrmConnectionModule.forRoot({
            entities: typeOrmEntities
        }),
        GraphQLConnectionModule.forRoot({
            entitiesModules: graphQLEntitiesModules
        })
    ],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
