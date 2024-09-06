import { Module } from '@nestjs/common';

import { AppConfigurationModule } from '@your-infinite-storybook/shared/api/app-configuration';
import { GraphQLConnectionModule } from '@your-infinite-storybook/shared/api/graphql-connection';
import { TypeOrmConnectionModule } from '@your-infinite-storybook/shared/api/typeorm-connection';
import { YourInfiniteStorybookStoryApiStoryControllerModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-controller';

import {
    appConfigFactories,
    graphQLEntitiesModules,
    typeOrmEntities
} from './app-configuration';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';

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
        }),
        YourInfiniteStorybookStoryApiStoryControllerModule
    ],
    controllers: [AppController],
    providers: [AppResolver]
})
export class AppModule {}
