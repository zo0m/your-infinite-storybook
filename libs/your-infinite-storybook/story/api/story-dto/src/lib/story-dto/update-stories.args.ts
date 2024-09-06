import { ArgsType, Field } from '@nestjs/graphql';

import { UpdateStoryInput } from './update-story.input';

@ArgsType()
export class UpdateStoriesArgs {
    @Field(() => [UpdateStoryInput])
    stories: UpdateStoryInput[];
}
