import { ArgsType, Field } from '@nestjs/graphql';

import { CreateStoryInput } from './create-story.input';

@ArgsType()
export class CreateStoriesArgs {
    @Field(() => [CreateStoryInput])
    stories!: CreateStoryInput[];
}
