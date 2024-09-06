import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserListYourInfiniteStorybookUserUiUserListFragment as UserOnUserList } from './__generated__/user-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-list.component.pug',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
    @Input() set users(users: UserOnUserList[]) {
        this.users$.next(users);
    }

    @Output() readonly userListClick = new EventEmitter<string>();

    get users() {
        return this.users$.value;
    }

    users$ = new BehaviorSubject<UserOnUserList[]>([]);

    onUserListClick(id: string) {
        if (id) {
            this.userListClick.emit(id);
        }
    }
}
