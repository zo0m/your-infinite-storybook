import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserListItemYourInfiniteStorybookUserUiUserListItemFragment as UserOnUserListItemFragment } from './__generated__/user-list-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-list-item.component.pug',
    styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
    @Input() set user(user: UserOnUserListItemFragment | undefined) {
        this.user$.next(user);
    }

    @Output() readonly userListItemClick = new EventEmitter<string>();

    get user() {
        return this.user$.value;
    }

    user$ = new BehaviorSubject<UserOnUserListItemFragment | undefined>(
        undefined
    );

    get title() {
        return this.user.name;
    }

    onUserListItemClick() {
        const id = this.user && this.user.id;
        if (id) {
            this.userListItemClick.emit(id);
        }
    }
}
