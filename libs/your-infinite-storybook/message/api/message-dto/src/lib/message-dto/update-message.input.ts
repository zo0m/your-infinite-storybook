import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
    IsDate,
    IsEmail,
    IsOptional,
    Length,
    MaxLength
} from 'class-validator';

import { CreateMessageInput } from './create-message.input';

const nullable = true;

@InputType()
export class UpdateMessageInput extends CreateMessageInput {
    @Field(() => ID)
    id!: string;

    @Field({ nullable })
    role?: string;
    @Field({ nullable })
    content?: string;
    @Field(() => ID, { nullable })
    storyId?: string;
}
