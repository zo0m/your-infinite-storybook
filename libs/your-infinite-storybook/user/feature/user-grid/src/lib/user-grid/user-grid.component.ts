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
    GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridGQL as GetUsersGQL,
    GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQuery as GetUsersQuery,
    GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQueryVariables as GetUsersQueryVariables,
    UserOnUserGridYourInfiniteStorybookUserFeatureUserGridFragment as UserFragment
} from './__generated__/user-grid.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-grid.component.pug',
    styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent {
    @Input() set where(where: GetUsersQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetUsersQueryVariables['where']>(undefined);

    @Output() readonly userGridClick = new EventEmitter<string>();

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

    onUserGridClick(id: string) {
        if (id) {
            this.userGridClick.emit(id);
        }
    }
}
