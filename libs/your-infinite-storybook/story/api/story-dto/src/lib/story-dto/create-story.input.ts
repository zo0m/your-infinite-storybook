import { Field, InputType } from '@nestjs/graphql';

const nullable = true;

@InputType()
export class CreateStoryInput {
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
