import { Module } from '@nestjs/common';

import { SharedApiMessageBrokerModule } from '@your-infinite-storybook/shared/api/message-broker';
import { SharedApiOpenAiModule } from '@your-infinite-storybook/shared/api/open-ai';
import { YourInfiniteStorybookMessageApiMessageServiceModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';
import { YourInfiniteStorybookStoryApiStoryModelModule } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

import {
    GenerateStoriesService,
    StoriesOpenAiService,
    StoriesService
} from './story-service';

const services = [StoriesService, StoriesOpenAiService, GenerateStoriesService];

@Module({
    imports: [
        SharedApiOpenAiModule,
        SharedApiMessageBrokerModule,
        YourInfiniteStorybookMessageApiMessageServiceModule,
        YourInfiniteStorybookStoryApiStoryModelModule
    ],
    providers: services,
    exports: services
})
export class YourInfiniteStorybookStoryApiStoryServiceModule {}
