import { ConfigService, registerAs } from '@nestjs/config';

const configToken = 'app';

interface AppConfig {
    name: string;
    env: string;
    isProduction: boolean;
    host: string;
    port: number;
    globalPrefix?: string;
    target?: string;
    configuration?: string;
}

export const mapEnvToAppConfig = (): AppConfig => ({
    name: process.env.NX_TASK_TARGET_PROJECT,
    env: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    host: process.env.API_HOST ?? 'localhost',
    port: parseInt(process.env.API_PORT ?? '3333'),
    globalPrefix: process.env.API_GLOBAL_PREFIX ?? 'api',
    target: process.env.NX_TASK_TARGET_TARGET,
    configuration: process.env.NX_TASK_TARGET_CONFIGURATION
});

export const appConfigFactory = registerAs<AppConfig>(
    configToken,
    mapEnvToAppConfig
);

export const getAppConfig = (configService: ConfigService): AppConfig => {
    return configService.get(configToken);
};
