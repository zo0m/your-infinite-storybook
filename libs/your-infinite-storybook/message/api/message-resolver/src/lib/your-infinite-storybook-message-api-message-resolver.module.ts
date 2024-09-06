import { Module } from '@nestjs/common';

import { YourInfiniteStorybookMessageApiMessageDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-data-loader';
import { YourInfiniteStorybookMessageApiMessageServiceModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';
import { YourInfiniteStorybookStoryApiStoryDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-data-loader';

import { MessagesResolver } from './message-resolver';

@Module({
    imports: [
        YourInfiniteStorybookStoryApiStoryDataLoaderModule,
        YourInfiniteStorybookMessageApiMessageServiceModule,
        YourInfiniteStorybookMessageApiMessageDataLoaderModule
    ],
    providers: [MessagesResolver],
    exports: [MessagesResolver]
})
export class YourInfiniteStorybookMessageApiMessageResolverModule {}
