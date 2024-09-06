import { Module } from '@nestjs/common';

import { YourInfiniteStorybookMessageApiMessageDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-data-loader';
import { YourInfiniteStorybookMessageApiMessageModelModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';
import { YourInfiniteStorybookMessageApiMessageResolverModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-resolver';
import { YourInfiniteStorybookMessageApiMessageServiceModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';

@Module({
    imports: [
        YourInfiniteStorybookMessageApiMessageResolverModule,
        YourInfiniteStorybookMessageApiMessageModelModule,
        YourInfiniteStorybookMessageApiMessageServiceModule,
        YourInfiniteStorybookMessageApiMessageDataLoaderModule
    ],
    exports: [
        YourInfiniteStorybookMessageApiMessageResolverModule,
        YourInfiniteStorybookMessageApiMessageModelModule,
        YourInfiniteStorybookMessageApiMessageServiceModule,
        YourInfiniteStorybookMessageApiMessageDataLoaderModule
    ]
})
export class YourInfiniteStorybookMessageApiMessageGraphqlModule {}
