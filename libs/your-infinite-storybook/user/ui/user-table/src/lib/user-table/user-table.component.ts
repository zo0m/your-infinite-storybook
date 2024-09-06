import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserTableYourInfiniteStorybookUserUiUserTableFragment as UserOnUserTableFragment } from './__generated__/user-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-table.component.pug',
    styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
    @Input() set users(users: UserOnUserTableFragment[] | undefined) {
        this.users$.next(users);
    }

    @Output() readonly userTableClick = new EventEmitter<string>();

    get users() {
        return this.users$.value;
    }

    users$ = new BehaviorSubject<UserOnUserTableFragment[] | undefined>(
        undefined
    );

    onUserTableClick(id: string) {
        if (id) {
            this.userTableClick.emit(id);
        }
    }
}
