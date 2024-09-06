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
    GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableGQL as GetMessagesGQL,
    GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQuery as GetMessagesQuery,
    GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQueryVariables as GetMessagesQueryVariables,
    MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableFragment as MessageFragment
} from './__generated__/message-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-table.component.pug',
    styleUrls: ['./message-table.component.scss']
})
export class MessageTableComponent {
    @Input() set where(where: GetMessagesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetMessagesQueryVariables['where']>(undefined);

    @Output() readonly messageTableClick = new EventEmitter<string>();

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

    onMessageTableClick(id: string) {
        if (id) {
            this.messageTableClick.emit(id);
        }
    }
}
