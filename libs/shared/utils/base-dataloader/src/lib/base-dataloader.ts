import * as _ from 'lodash';
import { In } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

import DataLoader = require('dataloader');

interface ServiceType<T> {
    find(options?: FindManyOptions<T>): Promise<T[]>;

    findParents?(ids: string[]): Promise<T[][]>;
}

export abstract class BaseDataLoader<T> {
    protected constructor(private readonly service: ServiceType<T>) {}

    generateDataLoaderByWhereKey(whereKey: keyof T) {
        const dataLoaderFunction = async (ids: readonly string[]) => {
            const where = { [whereKey]: In([...ids]) } as FindOptionsWhere<T>;
            const rows = (await this.service.find({ where })) as T[];

            const whereId2rows = _.groupBy(rows, whereKey);
            return ids.map((id) => whereId2rows[id] || []);
        };

        return new DataLoader<string, T[]>(dataLoaderFunction);
    }

    generateDataLoaderParents() {
        if (!this.service.findParents) {
            throw Error('generateDataLoaderParents() - impossible to generate');
        }

        const dataLoaderFunction = async (ids: string[]) => {
            const parentsForIds = await this.service.findParents(ids);
            return parentsForIds || _.map(ids, (id) => []);
        };

        return new DataLoader<string, T[]>(dataLoaderFunction);
    }

    generateDataLoader(whereKey: keyof T | 'parents'): DataLoader<string, T[]> {
        return whereKey === 'parents'
            ? this.generateDataLoaderParents()
            : this.generateDataLoaderByWhereKey(whereKey);
    }
}
