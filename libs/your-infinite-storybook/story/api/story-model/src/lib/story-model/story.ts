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

import { Message } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';

const nullable = true;
const unique = true;

@TypeOrmEntity()
@ObjectType()
export class Story {
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
    title?: string;

    @Field({ nullable })
    @Column({ nullable })
    description?: string;

    @Field({ nullable })
    @Column({ nullable })
    lesson?: string;

    @Field({ nullable })
    @Column({ nullable })
    setting?: string;

    @Field({ nullable })
    @Column({ nullable })
    childName?: string;

    @Field({ nullable })
    @Column({ type: 'integer', nullable })
    childAge?: number;
    // messages skipped
}
