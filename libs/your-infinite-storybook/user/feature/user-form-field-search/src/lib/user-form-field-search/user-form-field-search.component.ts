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
    GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchGQL as GetUserGQL,
    GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery as GetUserQuery,
    SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchGQL as SearchUsersGQL,
    SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery as SearchUsersQuery,
    UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchFragment as UserFragment
} from './__generated__/user-form-field-search.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-form-field-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-form-field-search.component.pug',
    styleUrls: ['./user-form-field-search.component.scss']
})
export class UserFormFieldSearchComponent {
    @Output() readonly userIdChange = new EventEmitter<string>();

    @Input() placeholder = '';

    @Input() set userId(userId: string | null | undefined) {
        if (!this.selectedUser || this.selectedUser.id !== userId) {
            this.userId$.next(userId);
        }

        if (!userId) {
            this.loading = false;
        }
    }

    get userId() {
        return this.userId$.value;
    }

    userId$ = new BehaviorSubject<string | null | undefined>(undefined);

    selectedUser?: UserFragment | null;
    error?: ApolloError;
    loading = true;

    readonly getUserQuery$: Observable<ApolloQueryResult<GetUserQuery>> =
        this.userId$.pipe(
            distinctUntilChanged(),
            switchMap((userId) => {
                if (!userId) {
                    this.selectedUser = null;
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
                            const { data, error, loading, networkStatus } =
                                result;

                            this.selectedUser = data.user;

                            this.error = error;

                            if (networkStatus === 1 && data.user) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }
                        })
                    );
            })
        );

    search$ = new BehaviorSubject<string | null | undefined>(undefined);

    foundUsers: UserFragment[] = [];
    searchError?: ApolloError;
    searchLoading = false;

    readonly searchUsersQuery$: Observable<
        ApolloQueryResult<SearchUsersQuery>
    > = this.search$.pipe(
        filter((search) => !!search),
        switchMap((search) => {
            if (!search) {
                this.foundUsers = [];
                return EMPTY;
            }

            return this.searchUsersGQL
                .watch(
                    { search },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network',
                        errorPolicy: 'all'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<SearchUsersQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.usersSearch) {
                            this.searchLoading = false;
                        } else {
                            this.searchLoading = loading;
                        }

                        this.error = error;
                        if (!this.searchLoading) {
                            this.foundUsers = data.usersSearch;
                        }
                    })
                );
        })
    );

    constructor(
        private getUserGQL: GetUserGQL,
        private searchUsersGQL: SearchUsersGQL
    ) {}

    onUserSearch(search: string) {
        this.search$.next(search);
    }

    onUserSelected(user: UserFragment) {
        if (user) {
            this.userIdChange.emit(user.id);
            this.selectedUser = user;
        }
    }
}
