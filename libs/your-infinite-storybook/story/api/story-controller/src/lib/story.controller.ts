import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { CreateStoryInput } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-dto';
import { GenerateStoriesService } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

@Controller('stories')
export class StoryController {
    constructor(
        private readonly generateStoriesService: GenerateStoriesService
    ) {}

    @Get('new')
    test(@Query() query: { y: number }) {
        return { x: 1, ...query };
    }

    @Post('generate')
    async generateNewStory(@Body() createStoryInput: CreateStoryInput) {
        return this.generateStoriesService.generateStory(createStoryInput);
    }

    @Post('new-test')
    newStory() {
        return {
            test: 'test'
        };
    }
}
