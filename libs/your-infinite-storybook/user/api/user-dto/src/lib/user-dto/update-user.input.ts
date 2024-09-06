import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
    IsDate,
    IsEmail,
    IsOptional,
    Length,
    MaxLength
} from 'class-validator';

import { CreateUserInput } from './create-user.input';

const nullable = true;

@InputType()
export class UpdateUserInput extends CreateUserInput {
    @Field(() => ID)
    id!: string;

    @Field({ nullable })
    name?: string;
    @Field({ nullable })
    email?: string;
    @Field({ nullable })
    role?: string;
    @Field({ nullable })
    bio?: string;
}
