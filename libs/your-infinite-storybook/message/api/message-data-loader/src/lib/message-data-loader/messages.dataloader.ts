import { Injectable } from '@nestjs/common';

import { BaseDataLoader } from '@your-infinite-storybook/shared/utils/base-dataloader';
import { Message } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';
import { MessagesService } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';

@Injectable()
export class MessagesDataLoader extends BaseDataLoader<Message> {
    constructor(private readonly messagesService: MessagesService) {
        super(messagesService);
    }
}
