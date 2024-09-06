import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import * as _ from 'lodash';
import {
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    FindOptionsWhere,
    In,
    IsNull,
    Like,
    Repository
} from 'typeorm';

import { User } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-model';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findById(
        id: string,
        options?: FindOneOptions<User>
    ): Promise<User | null> {
        return this.userRepository.findOne({
            ...options,
            where: { id, ...options?.where }
        });
    }

    async findByIds(
        ids: string[],
        options?: FindManyOptions<User>
    ): Promise<User[]> {
        return this.find({
            ...options,
            where: { id: In(ids), ...options?.where }
        });
    }

    async find(options: FindManyOptions<User>): Promise<User[]> {
        const where: FindOptionsWhere<User> = options.where as any;
        for (const [key, value] of _.entries(options.where)) {
            if (value === null) {
                where[key as keyof User] = IsNull() as any;
            }
        }

        return this.userRepository.find({
            order: { createdAt: 'DESC' },
            ...options,
            where
        });
    }

    async create(...users: DeepPartial<User>[]): Promise<User[]> {
        const createdUsers = this.userRepository.create(users);
        return this.userRepository.save(createdUsers);
    }

    async update(...fieldsToUpdate: DeepPartial<User>[]): Promise<User[]> {
        const id2fieldsToUpdate = _.keyBy(fieldsToUpdate, 'id');
        const usersToUpdate = await this.findByIds(
            Object.keys(id2fieldsToUpdate)
        );
        const updatedUsers = [];
        for (const user of usersToUpdate) {
            const updatedUser = this.userRepository.merge(
                user,
                id2fieldsToUpdate[user.id]
            );
            updatedUsers.push(updatedUser);
        }

        return this.userRepository.save(updatedUsers);
    }

    async delete(...ids: string[]): Promise<User[]> {
        const usersToRemove = await this.findByIds(ids);
        if (usersToRemove.length) {
            await this.userRepository.delete(
                usersToRemove.map(({ id }) => id as string)
            );
        }
        return usersToRemove;
    }

    async save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    search(search: string, options: { take?: number; skip?: number }) {
        return this.userRepository.find({
            where: _.compact([
                { name: Like(`%${search}%`) },
                { description: Like(`%${search}%`) },
                isUUID(search) ? { id: search } : undefined
            ]),
            order: { createdAt: 'DESC' },
            ...options
        });
    }
}
