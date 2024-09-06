import { Module } from '@nestjs/common';

import { YourInfiniteStorybookStoryApiStoryServiceModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

import { StoriesDataLoader } from './story-data-loader';

@Module({
    imports: [YourInfiniteStorybookStoryApiStoryServiceModule],
    providers: [StoriesDataLoader],
    exports: [StoriesDataLoader]
})
export class YourInfiniteStorybookStoryApiStoryDataLoaderModule {}
