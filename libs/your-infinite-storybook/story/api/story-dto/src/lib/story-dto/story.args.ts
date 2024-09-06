import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class StoryArgs {
    @Field(() => ID)
    id: string;
}
