import { ArgsType, Field } from '@nestjs/graphql';

import { UpdateUserInput } from './update-user.input';

@ArgsType()
export class UpdateUsersArgs {
    @Field(() => [UpdateUserInput])
    users: UpdateUserInput[];
}
