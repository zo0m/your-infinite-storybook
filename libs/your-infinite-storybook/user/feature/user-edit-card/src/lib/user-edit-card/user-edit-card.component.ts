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

import { UpdateUserInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import {
    EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardGQL as EditUserGQL,
    GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardGQL as GetUserGQL,
    GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardQuery as GetUserQuery,
    UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardFragment as UserFragment
} from './__generated__/user-edit-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-edit-card.component.pug',
    styleUrls: ['./user-edit-card.component.scss']
})
export class UserEditCardComponent {
    @Output() readonly userEdit = new EventEmitter<string>();

    @Input() set userId(userId: string | null | undefined) {
        this.userId$.next(userId);
    }

    get userId() {
        return this.userId$.value;
    }

    userId$ = new BehaviorSubject<string | null | undefined>(undefined);

    user?: UpdateUserInput | null;
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

                            if (networkStatus === 1 && data.user) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }

                            if (data.user) {
                                this.user = { ...data.user } as UpdateUserInput;
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
        private getUserGQL: GetUserGQL,
        private editUserGQL: EditUserGQL
    ) {}

    async editUser(editedUser: UpdateUserInput) {
        try {
            this.loading = true;

            const user = _.omit(editedUser, '__typename');
            const result = await firstValueFrom(
                this.editUserGQL.mutate({ user })
            );

            const [updatedUser] = result?.data?.usersUpdate ?? [];
            this.loading = false;

            if (updatedUser?.id) {
                this.userEdit.emit(updatedUser.id);
            }
        } catch (error) {
            console.log(`onUserSubmit() error = ${error}`);
            throw error;
        }
    }

    onUserEditCardDelete(deletedUserId: string) {}

    onUserEditCardSave(editedUser: UpdateUserInput) {
        this.editUser(editedUser);
    }
}
