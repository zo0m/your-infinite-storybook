import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

import { getDatabaseConfig } from './database.config';

@Module({})
export class TypeOrmConnectionModule {
    public static forRoot(options: {
        entities: BaseDataSourceOptions['entities'];
    }): DynamicModule {
        return {
            module: TypeOrmConnectionModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory: async (configService: ConfigService) => {
                        const dbConfig = getDatabaseConfig(configService);

                        return {
                            ...dbConfig,
                            entities: options.entities
                        };
                    }
                })
            ],
            exports: [TypeOrmModule]
        };
    }
}
