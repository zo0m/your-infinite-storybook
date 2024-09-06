import { ArgsType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

const nullable = true;

@InputType()
export class UsersWhereInput {
    @Field(() => [ID], { nullable })
    ids?: string[];

    @Field({ nullable })
    createdAt?: Date;

    @Field({ nullable })
    updatedAt?: Date;

    @Field({ nullable })
    name?: string;

    @Field({ nullable })
    email?: string;

    @Field({ nullable })
    role?: string;
}
