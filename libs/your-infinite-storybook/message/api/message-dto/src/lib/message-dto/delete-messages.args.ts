import { ArgsType, Field, ID } from '@nestjs/graphql';

import { CreateMessageInput } from './create-message.input';

@ArgsType()
export class DeleteMessagesArgs {
    @Field(() => [ID])
    ids!: string[];
}
