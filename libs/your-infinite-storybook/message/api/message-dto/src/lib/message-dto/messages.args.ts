import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

import { MessagesWhereInput } from './messages-where.input';

const nullable = true;

@ArgsType()
export class MessagesArgs {
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

    @Field(() => MessagesWhereInput, { nullable })
    where?: MessagesWhereInput;
}
