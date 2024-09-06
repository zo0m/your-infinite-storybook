import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
    @Field(() => ID)
    id: string;
}
