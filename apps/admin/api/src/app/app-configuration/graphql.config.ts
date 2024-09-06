import { YourInfiniteStorybookMessageApiMessageGraphqlModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-graphql';
import { YourInfiniteStorybookStoryApiStoryGraphqlModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-graphql';
import { YourInfiniteStorybookUserApiUserGraphqlModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-graphql';

export const graphQLEntitiesModules = [
    YourInfiniteStorybookUserApiUserGraphqlModule,
    YourInfiniteStorybookMessageApiMessageGraphqlModule,
    YourInfiniteStorybookStoryApiStoryGraphqlModule
];
