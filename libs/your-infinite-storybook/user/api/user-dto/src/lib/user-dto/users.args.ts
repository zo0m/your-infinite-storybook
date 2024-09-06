import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

import { UsersWhereInput } from './users-where.input';

const nullable = true;

@ArgsType()
export class UsersArgs {
    @Field(() => Int, { nullable })
    @Min(0)
    skip?: number = 0;

    @Field(() => Int, { nullable })
    @Min(1)
    @Max(200)
    take?: number = 50;

    @Field(() => [ID], { nullable })
    ids?: string[];

    @Field(() => ID, { nullable })
    id?: string;

    @Field(() => UsersWhereInput, { nullable })
    where?: UsersWhereInput;
}
