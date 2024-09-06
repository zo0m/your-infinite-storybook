import { Module } from '@nestjs/common';

import { YourInfiniteStorybookStoryApiStoryDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-data-loader';
import { YourInfiniteStorybookStoryApiStoryModelModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';
import { YourInfiniteStorybookStoryApiStoryResolverModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-resolver';
import { YourInfiniteStorybookStoryApiStoryServiceModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

@Module({
    imports: [
        YourInfiniteStorybookStoryApiStoryResolverModule,
        YourInfiniteStorybookStoryApiStoryModelModule,
        YourInfiniteStorybookStoryApiStoryServiceModule,
        YourInfiniteStorybookStoryApiStoryDataLoaderModule
    ],
    exports: [
        YourInfiniteStorybookStoryApiStoryResolverModule,
        YourInfiniteStorybookStoryApiStoryModelModule,
        YourInfiniteStorybookStoryApiStoryServiceModule,
        YourInfiniteStorybookStoryApiStoryDataLoaderModule
    ]
})
export class YourInfiniteStorybookStoryApiStoryGraphqlModule {}
