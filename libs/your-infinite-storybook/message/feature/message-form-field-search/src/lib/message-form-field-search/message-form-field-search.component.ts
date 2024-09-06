import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

import {
    GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchGQL as GetMessageGQL,
    GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery as GetMessageQuery,
    MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchFragment as MessageFragment,
    SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchGQL as SearchMessagesGQL,
    SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery as SearchMessagesQuery
} from './__generated__/message-form-field-search.component.graphql';

@Component({
    selector:
        'your-infinite-storybook-message-feature-message-form-field-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-form-field-search.component.pug',
    styleUrls: ['./message-form-field-search.component.scss']
})
export class MessageFormFieldSearchComponent {
    @Output() readonly messageIdChange = new EventEmitter<string>();

    @Input() placeholder = '';

    @Input() set messageId(messageId: string | null | undefined) {
        if (!this.selectedMessage || this.selectedMessage.id !== messageId) {
            this.messageId$.next(messageId);
        }

        if (!messageId) {
            this.loading = false;
        }
    }

    get messageId() {
        return this.messageId$.value;
    }

    messageId$ = new BehaviorSubject<string | null | undefined>(undefined);

    selectedMessage?: MessageFragment | null;
    error?: ApolloError;
    loading = true;

    readonly getMessageQuery$: Observable<ApolloQueryResult<GetMessageQuery>> =
        this.messageId$.pipe(
            distinctUntilChanged(),
            switchMap((messageId) => {
                if (!messageId) {
                    this.selectedMessage = null;
                    this.loading = false;
                    return EMPTY;
                }

                return this.getMessageGQL
                    .watch(
                        { messageId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-first',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetMessageQuery>) => {
                            const { data, error, loading, networkStatus } =
                                result;

                            this.selectedMessage = data.message;

                            this.error = error;

                            if (networkStatus === 1 && data.message) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }
                        })
                    );
            })
        );

    search$ = new BehaviorSubject<string | null | undefined>(undefined);

    foundMessages: MessageFragment[] = [];
    searchError?: ApolloError;
    searchLoading = false;

    readonly searchMessagesQuery$: Observable<
        ApolloQueryResult<SearchMessagesQuery>
    > = this.search$.pipe(
        filter((search) => !!search),
        switchMap((search) => {
            if (!search) {
                this.foundMessages = [];
                return EMPTY;
            }

            return this.searchMessagesGQL
                .watch(
                    { search },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network',
                        errorPolicy: 'all'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<SearchMessagesQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.messagesSearch) {
                            this.searchLoading = false;
                        } else {
                            this.searchLoading = loading;
                        }

                        this.error = error;
                        if (!this.searchLoading) {
                            this.foundMessages = data.messagesSearch;
                        }
                    })
                );
        })
    );

    constructor(
        private getMessageGQL: GetMessageGQL,
        private searchMessagesGQL: SearchMessagesGQL
    ) {}

    onMessageSearch(search: string) {
        this.search$.next(search);
    }

    onMessageSelected(message: MessageFragment) {
        if (message) {
            this.messageIdChange.emit(message.id);
            this.selectedMessage = message;
        }
    }
}
