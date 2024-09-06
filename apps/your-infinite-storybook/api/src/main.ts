/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { mapEnvToAppConfig } from '@your-infinite-storybook/shared/api/app-configuration';

import { AppModule } from './app/app.module';

async function bootstrap() {
    const { name, globalPrefix, port } = mapEnvToAppConfig();

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(globalPrefix);

    await app.listen(port);

    Logger.log(
        `🚀 Application [${name}] is running on: http://localhost:${port}/${globalPrefix}`
    );
}

bootstrap();
