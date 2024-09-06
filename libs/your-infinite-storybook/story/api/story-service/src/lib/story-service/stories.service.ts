import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import * as _ from 'lodash';
import { DeepPartial, FindManyOptions, Like, Repository } from 'typeorm';

import { BaseEntityService } from '@your-infinite-storybook/shared/api/base-entity-service';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

import { getRandomStoryLessons } from './story.data';

@Injectable()
export class StoriesService extends BaseEntityService<Story> {
    constructor(
        @InjectRepository(Story)
        private readonly storyRepository: Repository<Story>
    ) {
        super(storyRepository);
    }

    async find(options: FindManyOptions<Story>): Promise<Story[]> {
        return super.find({
            order: { createdAt: 'DESC' },
            ...options
        });
    }

    async create(...stories: DeepPartial<Story>[]): Promise<Story[]> {
        const filledStories = stories.map((story) => {
            const lesson =
                story.lesson ?? getRandomStoryLessons(2).join(' and ');

            return {
                lesson,
                ...story
            };
        });

        return super.create(...filledStories);
    }

    search(search: string, options: { take?: number; skip?: number }) {
        return this.storyRepository.find({
            where: _.compact([
                { name: Like(`%${search}%`) },
                { description: Like(`%${search}%`) },
                isUUID(search) ? { id: search } : undefined
            ]),
            order: { createdAt: 'DESC' },
            ...options
        });
    }
}
