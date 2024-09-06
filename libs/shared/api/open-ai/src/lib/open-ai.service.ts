import { Injectable } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai';
import {
    ChatCompletionResponseMessage,
    CreateChatCompletionRequest
} from 'openai/api';
import { CreateChatCompletionResponseChoicesInner } from 'openai/dist/api';
import { Observable, Subject } from 'rxjs';

import { isDefined } from '@your-infinite-storybook/shared/utils/is-defined';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

@Injectable()
export class OpenAiService {
    openai = new OpenAIApi(configuration);

    async createChatCompletion(
        createChatCompletionRequest: createChatInput
    ): Promise<ChatCompletionResponseMessage[]> {
        const response = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            temperature: 0.4,
            ...createChatCompletionRequest
        });

        const {
            data: { id, choices }
        } = response;

        const messages = (choices as CreateChatCompletionResponseChoicesInner[])
            .map((choice) => choice.message)
            .filter(isDefined);

        return messages;
    }

    async createChatCompletionStream(
        createChatCompletionRequest: createChatInput
    ): Promise<Observable<string>> {
        const subject = new Subject<string>();

        console.time('createChatCompletionStream');

        const response = await this.openai.createChatCompletion(
            {
                model: 'gpt-3.5-turbo',
                temperature: 0.4,
                stream: true,
                ...createChatCompletionRequest
            },
            { responseType: 'stream' }
        );

        console.timeEnd('createChatCompletionStream');

        const stream: IncomingMessage =
            response.data as unknown as IncomingMessage;

        stream.on('data', (chunk: Buffer) => {
            const payloads = chunk.toString().split('\n\n');

            for (const payload of payloads) {
                if (payload.includes('[DONE]')) return;

                if (payload.startsWith('data:')) {
                    const data = payload.replace(/(\n)?^data:\s*/g, ''); // in case there's multiline data event
                    try {
                        const delta = JSON.parse(data.trim());
                        const word: string = delta.choices[0].delta?.content;

                        subject.next(word);
                    } catch (error) {
                        console.log(
                            `createChatCompletionStream error with JSON.parse and ${payload}.\n${error}`
                        );

                        subject.error(error);
                    }
                }
            }
        });

        stream.on('end', () => {
            subject.complete();
        });

        stream.on('error', (e: Error) => {
            console.error(`createChatCompletionStream error:\n`, e);
            subject.error(e);
        });

        return subject.asObservable();
    }
}

type PartialWithRequired<T, K extends keyof T> = Partial<T> &
    Required<Pick<T, K>>;

type createChatInput = PartialWithRequired<
    CreateChatCompletionRequest,
    'messages'
>;
