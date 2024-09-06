import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import * as _ from 'lodash';
import { BehaviorSubject, EMPTY, Observable, firstValueFrom } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { UpdateMessageInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import {
    EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardGQL as EditMessageGQL,
    GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardGQL as GetMessageGQL,
    GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardQuery as GetMessageQuery,
    MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardFragment as MessageFragment
} from './__generated__/message-edit-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-edit-card.component.pug',
    styleUrls: ['./message-edit-card.component.scss']
})
export class MessageEditCardComponent {
    @Output() readonly messageEdit = new EventEmitter<string>();

    @Input() set messageId(messageId: string | null | undefined) {
        this.messageId$.next(messageId);
    }

    get messageId() {
        return this.messageId$.value;
    }

    messageId$ = new BehaviorSubject<string | null | undefined>(undefined);

    message?: UpdateMessageInput | null;
    error?: ApolloError;

    readonly query$ = this.messageId$.pipe(
        switchMap((messageId) => {
            if (!messageId) {
                return EMPTY;
            }

            const query$: Observable<ApolloQueryResult<GetMessageQuery>> =
                this.getMessageGQL
                    .watch(
                        { messageId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-and-network',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetMessageQuery>) => {
                            const { data, error, loading, networkStatus } =
                                result;

                            if (networkStatus === 1 && data.message) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }

                            if (data.message) {
                                this.message = {
                                    ...data.message
                                } as UpdateMessageInput;
                            }
                            this.error = error;
                        })
                    );

            return query$;
        })
    );

    loading$ = new BehaviorSubject<boolean>(false);

    set loading(loading: boolean) {
        this.loading$.next(loading);
    }

    get loading() {
        return this.loading$.value;
    }

    constructor(
        private getMessageGQL: GetMessageGQL,
        private editMessageGQL: EditMessageGQL
    ) {}

    async editMessage(editedMessage: UpdateMessageInput) {
        try {
            this.loading = true;

            const message = _.omit(editedMessage, '__typename');
            const result = await firstValueFrom(
                this.editMessageGQL.mutate({ message })
            );

            const [updatedMessage] = result?.data?.messagesUpdate ?? [];
            this.loading = false;

            if (updatedMessage?.id) {
                this.messageEdit.emit(updatedMessage.id);
            }
        } catch (error) {
            console.log(`onMessageSubmit() error = ${error}`);
            throw error;
        }
    }

    onMessageEditCardDelete(deletedMessageId: string) {}

    onMessageEditCardSave(editedMessage: UpdateMessageInput) {
        this.editMessage(editedMessage);
    }
}
