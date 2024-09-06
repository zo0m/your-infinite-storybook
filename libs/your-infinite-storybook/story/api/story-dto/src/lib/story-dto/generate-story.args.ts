import { ArgsType, Field } from '@nestjs/graphql';

import { CreateStoryInput } from './create-story.input';

@ArgsType()
export class GenerateStoryArgs {
    @Field(() => CreateStoryInput)
    story!: CreateStoryInput;
}
