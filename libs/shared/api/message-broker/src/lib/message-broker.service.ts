import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class MessageBrokerService {
    private pubSub: PubSub;

    constructor() {
        this.pubSub = new PubSub();
    }

    async publish<T>(triggerName: string, payload: T): Promise<void> {
        await this.pubSub.publish(triggerName, payload);
    }

    async subscribe<T>(triggerName: string) {
        return this.pubSub.asyncIterator<T>(triggerName);
    }
}
