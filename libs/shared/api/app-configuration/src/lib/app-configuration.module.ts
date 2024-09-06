import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import type { ConfigFactory } from '@nestjs/config/dist/interfaces/config-factory.interface';

@Module({})
export class AppConfigurationModule {
    static forRoot(options: { configFactories: ConfigFactory[] }) {
        return {
            module: AppConfigurationModule,
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true,
                    load: options.configFactories
                })
            ],
            exports: [ConfigModule]
        };
    }
}
