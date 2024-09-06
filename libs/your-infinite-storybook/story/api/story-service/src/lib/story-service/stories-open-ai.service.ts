import { Injectable } from '@nestjs/common';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';

import { OpenAiService } from '@your-infinite-storybook/shared/api/open-ai';
import { isDefined } from '@your-infinite-storybook/shared/utils/is-defined';
import { MessagesService } from '@your-infinite-storybook/your-infinite-storybook/message/api/message-service';
import { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

import { StoriesService } from './stories.service';
import { getRandomStoryLessons, getRandomStoryType } from './story.data';

const DEFAULT_CHILD_AGE = 3;

@Injectable()
export class StoriesOpenAiService {
    constructor(
        private openAiService: OpenAiService,
        private storiesService: StoriesService,
        private messagesService: MessagesService
    ) {}

    async generateNewStory(story: Story) {
        const initMessages = createInitStoryMessages(story);

        const words$ = await this.openAiService.createChatCompletionStream({
            messages: initMessages
        });

        const words: string[] = [];

        words$.subscribe({
            next: (word) => {
                words.push(word);
            },
            complete: () =>
                this.messagesService.create({
                    storyId: story.id,
                    role: ChatCompletionRequestMessageRoleEnum.Assistant,
                    content: words.join('')
                })
        });

        this.messagesService.create(
            ...initMessages.map((msg) => ({
                storyId: story.id,
                ...msg
            }))
        );

        return words$;
    }
}

const createInitStoryMessages = (story: Story) => {
    const prepareChatGPTRole = `
        Imagine you are the storyteller, who creates new bedtime story for kid.
    `.trim();

    const commandToWriteStory = getCommandToWriteStory(story);

    const createChatMessages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.System,
            content: prepareChatGPTRole
        },
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: commandToWriteStory
        }
    ];

    return createChatMessages;
};

const getCommandToWriteStory = (story: Story) => {
    const [storyType] = getRandomStoryType(story.childAge ?? DEFAULT_CHILD_AGE);
    const storyTitle = story.title ? ` with title ${story.title}` : '';

    const commandsToWriteStory = [
        `Please, write ${storyType.name} for children ${storyTitle}.`,
        getStringThisStoryIsForChild(story),
        story.description ? `Story description ${story.description}` : null,
        `Messaging of the story should remind children that ${story.lesson}`,
        !story.title ? `The first line should be the title of the story` : null
    ].filter(isDefined);

    return commandsToWriteStory.join('\n');
};

const getStringThisStoryIsForChild = (story: Story) => {
    const { childAge, childName } = story;
    const aboutFor = childName ? 'about' : 'for';
    const withName = childName ? `with name ${childName}` : null;

    const age =
        typeof childAge === 'number' && childAge > 0
            ? childAge
            : DEFAULT_CHILD_AGE;

    return [`This story is ${aboutFor}`, `${age} yo`, withName]
        .filter(isDefined)
        .join(' ');
};
