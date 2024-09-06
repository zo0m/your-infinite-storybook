import { Module } from '@nestjs/common';

import { SharedApiMessageBrokerModule } from '@your-infinite-storybook/shared/api/message-broker';
import { YourInfiniteStorybookStoryApiStoryServiceModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

import { StoryController } from './story.controller';

@Module({
    imports: [
        YourInfiniteStorybookStoryApiStoryServiceModule,
        SharedApiMessageBrokerModule
    ],
    controllers: [StoryController],
    providers: [],
    exports: []
})
export class YourInfiniteStorybookStoryApiStoryControllerModule {}
