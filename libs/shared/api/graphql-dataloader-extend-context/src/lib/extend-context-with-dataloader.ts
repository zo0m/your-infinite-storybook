import { BaseDataLoader } from '@your-infinite-storybook/shared/utils/base-dataloader';

import DataLoader = require('dataloader');

export type GetDataLoader = <T>(
    dataLoaderKey: string,
    dataLoaderBuilder: BaseDataLoader<T>,
    whereKey: keyof T | 'parents'
) => DataLoader<string, T[]>;

export function extendContextWithDataLoader<T, B extends BaseDataLoader<T>>(
    ctx = {}
) {
    const dataLoaders: Record<string, DataLoader<string, T[]>> = {};

    const getDataLoader = (
        dataLoaderKey: string,
        dataLoaderBuilder: BaseDataLoader<T>,
        whereKey: keyof T | 'parents'
    ) => {
        if (!dataLoaders[dataLoaderKey]) {
            const dataLoader = dataLoaderBuilder.generateDataLoader(whereKey);
            dataLoaders[dataLoaderKey] = dataLoader;
        }

        return dataLoaders[dataLoaderKey];
    };

    return Object.assign(ctx, { dataLoaders, getDataLoader });
}

const fun: GetDataLoader = <T>() => new DataLoader<string, T[]>(async () => []);
