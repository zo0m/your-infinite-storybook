import { Injectable } from '@nestjs/common';

import { BaseDataLoader } from '@your-infinite-storybook/shared/utils/base-dataloader';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';
import { StoriesService } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

@Injectable()
export class StoriesDataLoader extends BaseDataLoader<Story> {
    constructor(private readonly storiesService: StoriesService) {
        super(storiesService);
    }
}
