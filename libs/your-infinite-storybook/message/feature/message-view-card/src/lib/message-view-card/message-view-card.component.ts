import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import {
    GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardGQL as GetMessageGQL,
    GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardQuery as GetMessageQuery,
    MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardFragment as MessageFragment
} from './__generated__/message-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-view-card.component.pug',
    styleUrls: ['./message-view-card.component.scss']
})
export class MessageViewCardComponent {
    @Input() set messageId(messageId: string) {
        this.messageId$.next(messageId);
    }

    get messageId() {
        return this.messageId$.value;
    }

    messageId$ = new BehaviorSubject<string | undefined>(undefined);

    message: MessageFragment;
    loading = true;
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
                            this.loading = loading;
                            this.message = { ...data.message };
                            this.error = error;
                        })
                    );

            return query$;
        })
    );

    constructor(private getMessageGQL: GetMessageGQL) {}
}
