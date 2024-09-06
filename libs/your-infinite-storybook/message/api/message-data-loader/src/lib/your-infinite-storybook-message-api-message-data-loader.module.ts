import { Module } from '@nestjs/common';

import { YourInfiniteStorybookMessageApiMessageServiceModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';

import { MessagesDataLoader } from './message-data-loader';

@Module({
    imports: [YourInfiniteStorybookMessageApiMessageServiceModule],
    providers: [MessagesDataLoader],
    exports: [MessagesDataLoader]
})
export class YourInfiniteStorybookMessageApiMessageDataLoaderModule {}
