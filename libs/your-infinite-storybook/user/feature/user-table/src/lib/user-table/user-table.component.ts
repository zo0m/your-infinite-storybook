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
    GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableGQL as GetUsersGQL,
    GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQuery as GetUsersQuery,
    GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQueryVariables as GetUsersQueryVariables,
    UserOnUserTableYourInfiniteStorybookUserFeatureUserTableFragment as UserFragment
} from './__generated__/user-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-table.component.pug',
    styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
    @Input() set where(where: GetUsersQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetUsersQueryVariables['where']>(undefined);

    @Output() readonly userTableClick = new EventEmitter<string>();

    query$ = this.where$.pipe(
        switchMap((where) =>
            this.getUsersGQL
                .watch(
                    { where },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<GetUsersQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.users) {
                            this.loading = false;
                        } else {
                            this.loading = loading;
                        }

                        this.users = data.users;
                        this.error = error;
                    })
                )
        )
    );

    users: UserFragment[] = [];
    loading = true;
    error: any;

    constructor(private getUsersGQL: GetUsersGQL) {}

    onUserTableClick(id: string) {
        if (id) {
            this.userTableClick.emit(id);
        }
    }
}
