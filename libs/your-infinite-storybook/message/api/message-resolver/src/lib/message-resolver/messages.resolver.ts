import {
    Args,
    Context,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
    Subscription
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { GetDataLoader } from '@your-infinite-storybook/shared/api/graphql-dataloader-extend-context';
import { MessagesDataLoader } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-data-loader';
import {
    CreateMessagesArgs,
    DeleteMessagesArgs,
    MessageArgs,
    MessagesArgs,
    SearchMessagesArgs,
    UpdateMessagesArgs
} from '@your-infinite-storybook/your-infinite-storybook/message/api/message-dto';
import { Message } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';
import { MessagesService } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';
import { StoriesDataLoader } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-data-loader';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

const pubSub = new PubSub();

@Resolver(() => Message)
export class MessagesResolver {
    constructor(
        private readonly messagesService: MessagesService,
        private readonly messagesDataLoader: MessagesDataLoader,
        private readonly storiesDataLoader: StoriesDataLoader
    ) {}

    @Query(() => [Message])
    async messages(
        @Args() { ids, skip, take, where }: MessagesArgs
    ): Promise<Message[]> {
        const options = { skip, take, where: { ...where } };

        return ids && ids.length
            ? this.messagesService.findByIds(ids, options)
            : this.messagesService.find(options);
    }

    @Query(() => Message, { nullable: true })
    async message(@Args() { id }: MessageArgs): Promise<Message | null> {
        return id ? this.messagesService.findById(id) : null;
    }

    @Query(() => [Message])
    async messagesSearch(
        @Args() { search, skip, take }: SearchMessagesArgs
    ): Promise<Message[]> {
        const options = { skip, take };
        return this.messagesService.search(search, options);
    }

    @ResolveField(() => Story)
    async story(
        @Parent() message: Message,
        @Context('getDataLoader') getDataLoader: GetDataLoader
    ): Promise<Story | null> {
        const dataloader = getDataLoader(
            'StoriesDataLoader-id',
            this.storiesDataLoader,
            'id'
        );

        if (message.storyId) {
            const [story] = await dataloader.load(message.storyId);
            return story;
        }

        return null;
    }

    @Mutation(() => [Message])
    async messagesCreate(
        @Args() { messages }: CreateMessagesArgs
    ): Promise<Message[]> {
        const messagesCreated = await this.messagesService.create(...messages);
        pubSub.publish('messagesCreated', { messagesCreated });
        return messagesCreated;
    }

    @Mutation(() => [Message])
    async messagesUpdate(
        @Args() { messages }: UpdateMessagesArgs
    ): Promise<Message[]> {
        const messagesUpdated = await this.messagesService.update(...messages);
        pubSub.publish('messagesUpdated', { messagesUpdated });
        return messagesUpdated;
    }

    @Mutation(() => [Message])
    async messagesDelete(
        @Args() { ids }: DeleteMessagesArgs
    ): Promise<Message[]> {
        const messagesDeleted = this.messagesService.delete(...ids);
        pubSub.publish('messagesDeleted', { messagesDeleted });
        return messagesDeleted;
    }

    @Subscription(() => [Message])
    async messagesCreated() {
        return pubSub.asyncIterator<Message>('messagesCreated');
    }

    @Subscription(() => [Message])
    async messagesUpdated() {
        return pubSub.asyncIterator<Message>('messagesUpdated');
    }

    @Subscription(() => [Message])
    async messagesDeleted() {
        return pubSub.asyncIterator<Message>('messagesDeleted');
    }
}
