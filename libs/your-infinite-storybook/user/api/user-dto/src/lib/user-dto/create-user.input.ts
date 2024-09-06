import { Field, ID, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, Length, MaxLength } from 'class-validator';

const nullable = true;

@InputType()
export class CreateUserInput {
    @Field({ nullable })
    name?: string;
    @Field({ nullable })
    email?: string;
    @Field({ nullable })
    role?: string;
    @Field({ nullable })
    bio?: string;
}
