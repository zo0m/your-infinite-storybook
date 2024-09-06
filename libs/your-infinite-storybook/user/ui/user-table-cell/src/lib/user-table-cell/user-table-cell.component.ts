import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserTableCellYourInfiniteStorybookUserUiUserTableCellFragment as UserOnUserTableCellFragment } from './__generated__/user-table-cell.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-table-cell',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-table-cell.component.pug',
    styleUrls: ['./user-table-cell.component.scss']
})
export class UserTableCellComponent {
    @Input() set user(user: UserOnUserTableCellFragment | undefined) {
        this.user$.next(user);
    }

    @Output() readonly userTableCellClick = new EventEmitter<string>();

    get user() {
        return this.user$.value;
    }

    user$ = new BehaviorSubject<UserOnUserTableCellFragment | undefined>(
        undefined
    );

    onUserTableCellClick() {
        const id = this.user && this.user.id;
        if (id) {
            this.userTableCellClick.emit(id);
        }
    }
}
