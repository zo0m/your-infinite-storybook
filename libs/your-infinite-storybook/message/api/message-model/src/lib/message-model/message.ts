import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Entity as TypeOrmEntity,
    UpdateDateColumn
} from 'typeorm';

import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

const nullable = true;
const unique = true;

@TypeOrmEntity()
@ObjectType()
export class Message {
    @Field(() => ID, { nullable })
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Field()
    @CreateDateColumn()
    createdAt!: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

    @Field({ nullable })
    @Column({ nullable })
    role?: string;

    @Field({ nullable })
    @Column({ nullable })
    content?: string;

    @Field(() => ID, { nullable })
    @Column({ type: 'uuid', nullable })
    storyId?: string;
}
