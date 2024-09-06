import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import {
    GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListGQL as GetMessagesGQL,
    GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQuery as GetMessagesQuery,
    GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQueryVariables as GetMessagesQueryVariables,
    MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageListFragment as MessageFragment
} from './__generated__/message-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-list.component.pug',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
    @Input() set where(where: GetMessagesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetMessagesQueryVariables['where']>(undefined);

    @Output() readonly messageListClick = new EventEmitter<string>();

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

    constructor(private getMessagesGQL: GetMessagesGQL) {}

    onMessageListClick(id: string) {
        if (id) {
            this.messageListClick.emit(id);
        }
    }
}
