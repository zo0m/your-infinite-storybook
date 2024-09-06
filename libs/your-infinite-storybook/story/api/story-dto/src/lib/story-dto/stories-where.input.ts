import { ArgsType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

const nullable = true;

@InputType()
export class StoriesWhereInput {
    @Field(() => [ID], { nullable })
    ids?: string[];

    @Field({ nullable })
    createdAt?: Date;

    @Field({ nullable })
    updatedAt?: Date;

    @Field({ nullable })
    title?: string;

    @Field({ nullable })
    description?: string;

    @Field({ nullable })
    lesson?: string;

    @Field({ nullable })
    setting?: string;

    @Field({ nullable })
    childName?: string;

    @Field({ nullable })
    childAge?: number;
}
