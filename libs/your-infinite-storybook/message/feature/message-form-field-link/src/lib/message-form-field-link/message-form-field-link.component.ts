import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

import {
    GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkGQL as GetMessageGQL,
    GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkQuery as GetMessageQuery,
    MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkFragment as MessageFragment
} from './__generated__/message-form-field-link.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-feature-message-form-field-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-form-field-link.component.pug',
    styleUrls: ['./message-form-field-link.component.scss']
})
export class MessageFormFieldLinkComponent {
    @Input() placeholder = '';

    @Input() set messageId(messageId: string | null | undefined) {
        this.messageId$.next(messageId);
        if (messageId) {
            this.loading = false;
            this.message = null;
        }
    }

    get messageId() {
        return this.messageId$.value;
    }

    messageId$ = new BehaviorSubject<string | null | undefined>(undefined);

    message?: MessageFragment | null;
    error?: ApolloError;
    loading = true;

    readonly query$: Observable<ApolloQueryResult<GetMessageQuery>> =
        this.messageId$.pipe(
            distinctUntilChanged(),
            switchMap((messageId) => {
                if (!messageId) {
                    this.message = null;
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
                            const { data, error, loading } = result;
                            this.message = data.message;
                            this.loading = loading;
                            this.error = error;
                        })
                    );
            })
        );

    constructor(private getMessageGQL: GetMessageGQL) {}
}
