import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, filter, map } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { isDefined } from '@your-infinite-storybook/shared/utils/is-defined';

import {
    GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListGQL as GetMessagesGQL,
    GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQuery as GetMessagesQuery,
    GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQueryVariables as GetMessagesQueryVariables,
    MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListFragment as MessageFragment,
    SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListGQL as SubscribeOnNewMessagesGQL
} from './__generated__/message-inline-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-inline-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-inline-list.component.pug',
    styleUrls: ['./message-inline-list.component.scss']
})
export class MessageInlineListComponent {
    @Input() set where(where: GetMessagesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetMessagesQueryVariables['where']>(undefined);

    @Output() readonly messageInlineListClick = new EventEmitter<string>();

    query$ = this.where$.pipe(
        switchMap((where) =>
            this.getMessagesGQL
                .watch(
                    { where },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<GetMessagesQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.messages) {
                            this.loading = false;
                        } else {
                            this.loading = loading;
                        }

                        this.messages = data.messages;
                        this.error = error;
                    })
                )
        )
    );

    messages: MessageFragment[] = [];
    loading = true;
    error: any;

    newWords = '';

    $newWord = this.where$.pipe(
        switchMap((where) => {
            if (where.storyId) {
                return this.subscribeOnNewMessagesGQL
                    .subscribe({
                        storyId: where.storyId
                    })
                    .pipe(
                        map((word) => word.data.newStoryMessageWord.word),
                        filter(isDefined),
                        tap((word) => {
                            this.newWords += word;
                        })
                    );
            } else {
                return EMPTY;
            }
        })
    );

    constructor(
        private getMessagesGQL: GetMessagesGQL,
        private subscribeOnNewMessagesGQL: SubscribeOnNewMessagesGQL
    ) {}

    onMessageInlineListClick(id: string) {
        if (id) {
            this.messageInlineListClick.emit(id);
        }
    }
}
