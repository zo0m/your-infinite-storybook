import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, Length, MaxLength } from 'class-validator';

const nullable = true;

@InputType()
export class CreateMessageInput {
    @Field({ nullable })
    role?: string;
    @Field({ nullable })
    content?: string;
    @Field(() => ID, { nullable })
    storyId?: string;
}
