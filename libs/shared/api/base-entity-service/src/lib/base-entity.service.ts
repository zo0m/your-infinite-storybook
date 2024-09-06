import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import {
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    FindOptionsWhere,
    In,
    IsNull,
    Repository
} from 'typeorm';

interface BaseEntity {
    id: string;
}

@Injectable()
export abstract class BaseEntityService<T extends BaseEntity> {
    protected constructor(private readonly repository: Repository<T>) {}

    async findById(id: string, options?: FindOneOptions<T>): Promise<T | null> {
        return this.repository.findOne({
            ...options,
            where: { id, ...options?.where }
        } as FindOneOptions<T>);
    }

    async findByIds(ids: string[], options?: FindManyOptions<T>): Promise<T[]> {
        return this.find({
            ...options,
            where: { id: In(ids), ...options?.where }
        } as FindManyOptions<T>);
    }

    async find(options: FindManyOptions<T>): Promise<T[]> {
        const where: FindOptionsWhere<T> = options.where as any;
        for (const [key, value] of _.entries(options.where)) {
            if (value === null) {
                where[key as keyof T] = IsNull() as any;
            }
        }

        return this.repository.find({
            ...options,
            where
        });
    }

    async create(...stories: DeepPartial<T>[]): Promise<T[]> {
        const createdStories = this.repository.create(stories);
        return this.repository.save(createdStories);
    }

    async update(...fieldsToUpdate: DeepPartial<T>[]): Promise<T[]> {
        const id2fieldsToUpdate = _.keyBy(fieldsToUpdate, 'id');
        const storiesToUpdate = await this.findByIds(
            Object.keys(id2fieldsToUpdate)
        );
        const updatedStories = [];

        for (const story of storiesToUpdate) {
            const updatedT = this.repository.merge(
                story,
                id2fieldsToUpdate[story.id]
            );

            updatedStories.push(updatedT);
        }

        return this.repository.save(updatedStories);
    }

    async delete(...ids: string[]): Promise<T[]> {
        const storiesToRemove = await this.findByIds(ids);
        if (storiesToRemove.length) {
            await this.repository.delete(
                storiesToRemove.map(({ id }) => id as string)
            );
        }
        return storiesToRemove;
    }

    async save(story: T): Promise<T> {
        return this.repository.save(story);
    }

    abstract search(search: string, options: FindManyOptions<T>);
}
