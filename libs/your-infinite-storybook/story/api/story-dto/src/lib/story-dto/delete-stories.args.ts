import { ArgsType, Field, ID } from '@nestjs/graphql';

import { CreateStoryInput } from './create-story.input';

@ArgsType()
export class DeleteStoriesArgs {
    @Field(() => [ID])
    ids!: string[];
}
