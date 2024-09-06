import { ArgsType, Field } from '@nestjs/graphql';

import { CreateUserInput } from './create-user.input';

@ArgsType()
export class CreateUsersArgs {
    @Field(() => [CreateUserInput])
    users: CreateUserInput[];
}
