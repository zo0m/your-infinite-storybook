import { ConfigService, registerAs } from '@nestjs/config';

import { getBoolEnv } from '@your-infinite-storybook/shared/utils/env-reader';

const configToken = 'database';

type DatabaseType = 'mysql' | 'postgres' | 'mariadb' | 'mongodb';

interface DatabaseConfig {
    type: DatabaseType;
    database: string;
    username: string;
    password: string;
    host: string;
    port: number;
    synchronize: boolean;
}

const getSynchronize = () =>
    process.env.NODE_ENV === 'production'
        ? false
        : getBoolEnv(process.env.DB_SYNCHRONIZE, false);

const getDBType = () => (process.env.DB_TYPE ?? 'postgres') as DatabaseType;

export const mapEnvToDatabaseConfig = (): DatabaseConfig => ({
    type: getDBType(),
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: getSynchronize()
});

export const databaseConfigFactory = registerAs<DatabaseConfig>(
    configToken,
    mapEnvToDatabaseConfig
);

export const getDatabaseConfig = (
    configService: ConfigService
): DatabaseConfig => {
    return configService.get(configToken);
};
