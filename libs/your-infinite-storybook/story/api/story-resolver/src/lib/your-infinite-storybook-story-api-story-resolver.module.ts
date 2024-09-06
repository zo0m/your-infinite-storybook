import { Module } from '@nestjs/common';

import { SharedApiMessageBrokerModule } from '@your-infinite-storybook/shared/api/message-broker';
import { YourInfiniteStorybookMessageApiMessageDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-data-loader';
import { YourInfiniteStorybookStoryApiStoryDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-data-loader';
import { YourInfiniteStorybookStoryApiStoryServiceModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

import { StoriesResolver } from './story-resolver';

@Module({
    imports: [
        YourInfiniteStorybookMessageApiMessageDataLoaderModule,
        YourInfiniteStorybookStoryApiStoryServiceModule,
        YourInfiniteStorybookStoryApiStoryDataLoaderModule,
        SharedApiMessageBrokerModule
    ],
    providers: [StoriesResolver],
    exports: [StoriesResolver]
})
export class YourInfiniteStorybookStoryApiStoryResolverModule {}
