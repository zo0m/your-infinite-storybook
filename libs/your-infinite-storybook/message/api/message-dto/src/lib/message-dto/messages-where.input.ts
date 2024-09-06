import { ArgsType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

const nullable = true;

@InputType()
export class MessagesWhereInput {
    @Field(() => [ID], { nullable })
    ids?: string[];

    @Field({ nullable })
    createdAt?: Date;

    @Field({ nullable })
    updatedAt?: Date;

    @Field({ nullable })
    role?: string;

    @Field({ nullable })
    content?: string;

    @Field(() => ID, { nullable })
    storyId?: string;
}
