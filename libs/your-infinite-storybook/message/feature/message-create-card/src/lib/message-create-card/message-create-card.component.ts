import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { CreateMessageInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import { CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardGQL as CreateMessageGQL } from './__generated__/message-create-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-create-card',
    templateUrl: './message-create-card.component.pug',
    styleUrls: ['./message-create-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageCreateCardComponent {
    @Output() readonly messageCreate = new EventEmitter<string>();

    loading$ = new BehaviorSubject<boolean>(false);

    set loading(loading: boolean) {
        this.loading$.next(loading);
    }

    get loading() {
        return this.loading$.value;
    }

    constructor(private createMessageGQL: CreateMessageGQL) {}

    onMessageSubmit(message: CreateMessageInput) {
        this.createMessage(message);
    }

    async createMessage(message: CreateMessageInput) {
        try {
            this.loading = true;
            const result = await firstValueFrom(
                this.createMessageGQL.mutate({ message })
            );

            const [createdMessage] = result?.data?.messagesCreate ?? [];
            this.loading = false;

            if (createdMessage?.id) {
                this.messageCreate.emit(createdMessage.id);
            }
        } catch (error) {
            console.log(`createMessage() error = ${error}`);
            throw error;
        }
    }
}
