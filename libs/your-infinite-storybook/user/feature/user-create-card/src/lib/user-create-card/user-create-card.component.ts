import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { CreateUserInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import { CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardGQL as CreateUserGQL } from './__generated__/user-create-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-feature-user-create-card',
    templateUrl: './user-create-card.component.pug',
    styleUrls: ['./user-create-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCreateCardComponent {
    @Output() readonly userCreate = new EventEmitter<string>();

    loading$ = new BehaviorSubject<boolean>(false);

    set loading(loading: boolean) {
        this.loading$.next(loading);
    }

    get loading() {
        return this.loading$.value;
    }

    constructor(private createUserGQL: CreateUserGQL) {}

    onUserSubmit(user: CreateUserInput) {
        this.createUser(user);
    }

    async createUser(user: CreateUserInput) {
        try {
            this.loading = true;
            const result = await firstValueFrom(
                this.createUserGQL.mutate({ user })
            );

            const [createdUser] = result?.data?.usersCreate ?? [];
            this.loading = false;

            if (createdUser?.id) {
                this.userCreate.emit(createdUser.id);
            }
        } catch (error) {
            console.log(`createUser() error = ${error}`);
            throw error;
        }
    }
}
