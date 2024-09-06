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

const nullable = true;
const unique = true;

@TypeOrmEntity()
@ObjectType()
export class User {
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
    name?: string;

    @Field({ nullable })
    @Column({ nullable })
    email?: string;

    @Field({ nullable })
    @Column({ nullable })
    role?: string;

    @Field({ nullable })
    @Column({ nullable })
    bio?: string;
}
