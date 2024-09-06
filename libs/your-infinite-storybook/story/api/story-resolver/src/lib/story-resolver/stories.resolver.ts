import {
    Args,
    Context,
    Field,
    Mutation,
    ObjectType,
    Parent,
    Query,
    ResolveField,
    Resolver,
    Subscription
} from '@nestjs/graphql';

import { GetDataLoader } from '@your-infinite-storybook/shared/api/graphql-dataloader-extend-context';
import { MessageBrokerService } from '@your-infinite-storybook/shared/api/message-broker';
import { MessagesDataLoader } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-data-loader';
import { Message } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-model';
import { StoriesDataLoader } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-data-loader';
import {
    CreateStoriesArgs,
    DeleteStoriesArgs,
    SearchStoriesArgs,
    StoriesArgs,
    StoryArgs,
    UpdateStoriesArgs
} from '@your-infinite-storybook/your-infinite-storybook/story/api/story-dto';
import { GenerateStoryArgs } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-dto';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';
import {
    GenerateStoriesService,
    StoriesOpenAiService,
    StoriesService
} from '@your-infinite-storybook/your-infinite-storybook/story/api/story-service';

@Resolver(() => Story)
export class StoriesResolver {
    constructor(
        private readonly messageBrokerService: MessageBrokerService,
        private readonly storiesService: StoriesService,
        private readonly storiesOpenAiService: StoriesOpenAiService,
        private readonly generateStoriesService: GenerateStoriesService,
        private readonly storiesDataLoader: StoriesDataLoader,
        private readonly messagesDataLoader: MessagesDataLoader
    ) {}

    @Query(() => [Story])
    async stories(
        @Args() { ids, skip, take, where }: StoriesArgs
    ): Promise<Story[]> {
        const options = { skip, take, where: { ...where } };

        return ids && ids.length
            ? this.storiesService.findByIds(ids, options)
            : this.storiesService.find(options);
    }

    @Query(() => Story, { nullable: true })
    async story(@Args() { id }: StoryArgs): Promise<Story | null> {
        return id ? this.storiesService.findById(id) : null;
    }

    @Query(() => [Story])
    async storiesSearch(
        @Args() { search, skip, take }: SearchStoriesArgs
    ): Promise<Story[]> {
        const options = { skip, take };
        return this.storiesService.search(search, options);
    }

    @ResolveField(() => [Message])
    async messages(
        @Parent() story: Story,
        @Context('getDataLoader') getDataLoader: GetDataLoader
    ): Promise<Message[]> {
        const dataloader = getDataLoader(
            'MessagesDataLoader-storyId',
            this.messagesDataLoader,
            'storyId'
        );

        return dataloader.load(story.id);
    }

    @Mutation(() => [Story])
    async storiesCreate(
        @Args() { stories }: CreateStoriesArgs
    ): Promise<Story[]> {
        const storiesCreated = await this.storiesService.create(...stories);
        this.messageBrokerService.publish('storiesCreated', { storiesCreated });
        return storiesCreated;
    }

    @Mutation(() => Story)
    async storyGenerate(@Args() { story }: GenerateStoryArgs): Promise<Story> {
        return this.generateStoriesService.generateStory(story);
    }

    @Mutation(() => [Story])
    async storiesUpdate(
        @Args() { stories }: UpdateStoriesArgs
    ): Promise<Story[]> {
        const storiesUpdated = await this.storiesService.update(...stories);
        this.messageBrokerService.publish('storiesUpdated', { storiesUpdated });
        return storiesUpdated;
    }

    @Mutation(() => [Story])
    async storiesDelete(@Args() { ids }: DeleteStoriesArgs): Promise<Story[]> {
        const storiesDeleted = this.storiesService.delete(...ids);
        this.messageBrokerService.publish('storiesDeleted', { storiesDeleted });
        return storiesDeleted;
    }

    @Subscription(() => [Story])
    async storiesCreated() {
        return this.messageBrokerService.subscribe<Story>('storiesCreated');
    }

    @Subscription(() => StoryMessageWord, {
        nullable: true,
        filter: (payload, variables) => {
            return payload.newStoryMessageWord.storyId === variables.storyId;
        }
    })
    async newStoryMessageWord(@Args('storyId') storyId: string) {
        console.log(`subscribe to newStoryMessageWord`);
        return this.messageBrokerService.subscribe<StoryMessageWord>(
            'newStoryMessageWord'
        );
    }

    @Subscription(() => [Story])
    async storiesUpdated() {
        return this.messageBrokerService.subscribe<Story>('storiesUpdated');
    }

    @Subscription(() => [Story])
    async storiesDeleted() {
        return this.messageBrokerService.subscribe<Story>('storiesDeleted');
    }
}

@ObjectType()
class StoryMessageWord {
    @Field({ nullable: true })
    storyId!: string;

    @Field({ nullable: true })
    word!: string;
}
