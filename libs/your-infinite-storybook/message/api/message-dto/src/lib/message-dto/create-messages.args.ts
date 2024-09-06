import { ArgsType, Field } from '@nestjs/graphql';

import { CreateMessageInput } from './create-message.input';

@ArgsType()
export class CreateMessagesArgs {
    @Field(() => [CreateMessageInput])
    messages: CreateMessageInput[];
}
