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

import { Message } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    async findById(
        id: string,
        options?: FindOneOptions<Message>
    ): Promise<Message | null> {
        return this.messageRepository.findOne({
            ...options,
            where: { id, ...options?.where }
        });
    }

    async findByIds(
        ids: string[],
        options?: FindManyOptions<Message>
    ): Promise<Message[]> {
        return this.find({
            ...options,
            where: { id: In(ids), ...options?.where }
        });
    }

    async find(options: FindManyOptions<Message>): Promise<Message[]> {
        const where: FindOptionsWhere<Message> = options.where as any;
        for (const [key, value] of _.entries(options.where)) {
            if (value === null) {
                where[key as keyof Message] = IsNull() as any;
            }
        }

        return this.messageRepository.find({
            order: { createdAt: 'DESC' },
            ...options,
            where
        });
    }

    async create(...messages: DeepPartial<Message>[]): Promise<Message[]> {
        const createdMessages = this.messageRepository.create(messages);
        return this.messageRepository.save(createdMessages);
    }

    async update(
        ...fieldsToUpdate: DeepPartial<Message>[]
    ): Promise<Message[]> {
        const id2fieldsToUpdate = _.keyBy(fieldsToUpdate, 'id');
        const messagesToUpdate = await this.findByIds(
            Object.keys(id2fieldsToUpdate)
        );
        const updatedMessages = [];
        for (const message of messagesToUpdate) {
            const updatedMessage = this.messageRepository.merge(
                message,
                id2fieldsToUpdate[message.id]
            );
            updatedMessages.push(updatedMessage);
        }

        return this.messageRepository.save(updatedMessages);
    }

    async delete(...ids: string[]): Promise<Message[]> {
        const messagesToRemove = await this.findByIds(ids);
        if (messagesToRemove.length) {
            await this.messageRepository.delete(
                messagesToRemove.map(({ id }) => id as string)
            );
        }
        return messagesToRemove;
    }

    async save(message: Message): Promise<Message> {
        return this.messageRepository.save(message);
    }

    search(search: string, options: { take?: number; skip?: number }) {
        return this.messageRepository.find({
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
