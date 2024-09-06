import { ArgsType, Field, ID } from '@nestjs/graphql';

import { CreateUserInput } from './create-user.input';

@ArgsType()
export class DeleteUsersArgs {
    @Field(() => [ID])
    ids!: string[];
}
