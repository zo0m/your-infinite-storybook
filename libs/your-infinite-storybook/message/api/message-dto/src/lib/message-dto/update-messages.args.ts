import { ArgsType, Field } from '@nestjs/graphql';

import { UpdateMessageInput } from './update-message.input';

@ArgsType()
export class UpdateMessagesArgs {
    @Field(() => [UpdateMessageInput])
    messages: UpdateMessageInput[];
}
