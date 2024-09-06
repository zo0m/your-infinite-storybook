import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Story } from './story-model';

const StoryModelModule = TypeOrmModule.forFeature([Story]);

@Module({
    imports: [StoryModelModule],
    exports: [StoryModelModule]
})
export class YourInfiniteStorybookStoryApiStoryModelModule {}
