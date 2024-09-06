import { appConfigFactory } from '@your-infinite-storybook/shared/api/app-configuration';
import { graphQLConfigFactory } from '@your-infinite-storybook/shared/api/graphql-connection';
import { databaseConfigFactory } from '@your-infinite-storybook/shared/api/typeorm-connection';

export const appConfigFactories = [
    appConfigFactory,
    databaseConfigFactory,
    graphQLConfigFactory
];
