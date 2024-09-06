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
    GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardGQL as GetUserGQL,
    GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardQuery as GetUserQuery,
    UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardFragment as UserFragment
} from './__generated__/user-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-view-card.component.pug',
    styleUrls: ['./user-view-card.component.scss']
})
export class UserViewCardComponent {
    @Input() set userId(userId: string) {
        this.userId$.next(userId);
    }

    get userId() {
        return this.userId$.value;
    }

    userId$ = new BehaviorSubject<string | undefined>(undefined);

    user: UserFragment;
    loading = true;
    error?: ApolloError;

    readonly query$ = this.userId$.pipe(
        switchMap((userId) => {
            if (!userId) {
                return EMPTY;
            }

            const query$: Observable<ApolloQueryResult<GetUserQuery>> =
                this.getUserGQL
                    .watch(
                        { userId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-and-network',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetUserQuery>) => {
                            const { data, error, loading, networkStatus } =
                                result;
                            this.loading = loading;
                            this.user = { ...data.user };
                            this.error = error;
                        })
                    );

            return query$;
        })
    );

    constructor(private getUserGQL: GetUserGQL) {}
}
