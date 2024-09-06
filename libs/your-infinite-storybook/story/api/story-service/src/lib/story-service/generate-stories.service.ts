import { Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { MessageBrokerService } from '@your-infinite-storybook/shared/api/message-broker';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

import { StoriesOpenAiService } from './stories-open-ai.service';
import { StoriesService } from './stories.service';

@Injectable()
export class GenerateStoriesService {
    constructor(
        private readonly storiesService: StoriesService,
        private readonly storiesOpenAiService: StoriesOpenAiService,
        private readonly messageBrokerService: MessageBrokerService
    ) {}

    async generateStory(createStoryValues: DeepPartial<Story>) {
        const storyEntity = (
            await this.storiesService.create(createStoryValues)
        )[0];

        await this.messageBrokerService.publish('storiesCreated', {
            storiesCreated: [storyEntity]
        });

        const words$ = await this.storiesOpenAiService.generateNewStory(
            storyEntity
        );

        words$.subscribe((word) => {
            this.messageBrokerService.publish('newStoryMessageWord', {
                newStoryMessageWord: {
                    storyId: storyEntity.id,
                    word
                }
            });
        });

        return storyEntity;
    }
}
