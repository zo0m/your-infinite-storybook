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
    GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonGQL as GetUserGQL,
    GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonQuery as GetUserQuery,
    UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonFragment as UserFragment
} from './__generated__/user-remove-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-remove-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-remove-button.component.pug',
    styleUrls: ['./user-remove-button.component.scss']
})
export class UserRemoveButtonComponent {
    @Input() placeholder = '';

    @Input() set userId(userId: string | null | undefined) {
        this.userId$.next(userId);
        if (userId) {
            this.loading = false;
            this.user = null;
        }
    }

    get userId() {
        return this.userId$.value;
    }

    userId$ = new BehaviorSubject<string | null | undefined>(undefined);

    user?: UserFragment | null;
    error?: ApolloError;
    loading = true;

    readonly query$: Observable<ApolloQueryResult<GetUserQuery>> =
        this.userId$.pipe(
            distinctUntilChanged(),
            switchMap((userId) => {
                if (!userId) {
                    this.user = null;
                    this.loading = false;
                    return EMPTY;
                }

                return this.getUserGQL
                    .watch(
                        { userId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-first',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetUserQuery>) => {
                            const { data, error, loading } = result;
                            this.user = data.user;
                            this.loading = loading;
                            this.error = error;
                        })
                    );
            })
        );

    constructor(private getUserGQL: GetUserGQL) {}
}