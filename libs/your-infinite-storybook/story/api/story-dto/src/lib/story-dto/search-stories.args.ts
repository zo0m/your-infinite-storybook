import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

const nullable = true;

@ArgsType()
export class SearchStoriesArgs {
    @Field(() => Int, { nullable })
    @Min(0)
    skip?: number = 0;

    @Field(() => Int, { nullable })
    @Min(1)
    @Max(200)
    take?: number = 50;

    @Field(() => String, { nullable })
    search: string;
}
