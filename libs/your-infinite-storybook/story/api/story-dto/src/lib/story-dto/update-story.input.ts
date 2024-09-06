import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
    IsDate,
    IsEmail,
    IsOptional,
    Length,
    MaxLength
} from 'class-validator';

import { CreateStoryInput } from './create-story.input';

const nullable = true;

@InputType()
export class UpdateStoryInput extends CreateStoryInput {
    @Field(() => ID)
    id!: string;

    @Field({ nullable })
    title?: string;
    @Field({ nullable })
    description?: string;
    @Field({ nullable })
    lesson?: string;
    @Field({ nullable })
    setting?: string;
    @Field({ nullable })
    childName?: string;
    @Field({ nullable })
    childAge?: number;
}
