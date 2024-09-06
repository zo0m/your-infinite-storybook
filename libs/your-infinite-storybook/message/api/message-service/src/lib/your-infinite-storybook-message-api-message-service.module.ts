import { Module } from '@nestjs/common';

import { YourInfiniteStorybookMessageApiMessageModelModule } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';

import { MessagesService } from './message-service';

@Module({
    imports: [YourInfiniteStorybookMessageApiMessageModelModule],
    providers: [MessagesService],
    exports: [MessagesService]
})
export class YourInfiniteStorybookMessageApiMessageServiceModule {}
