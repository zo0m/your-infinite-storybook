import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class MessageArgs {
    @Field(() => ID)
    id: string;
}
