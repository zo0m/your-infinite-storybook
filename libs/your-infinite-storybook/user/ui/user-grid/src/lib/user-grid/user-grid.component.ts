import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserGridYourInfiniteStorybookUserUiUserGridFragment as UserOnUserGridFragment } from './__generated__/user-grid.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-grid.component.pug',
    styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent {
    @Input() set users(users: UserOnUserGridFragment[] | undefined) {
        this.users$.next(users);
    }

    @Output() readonly userGridClick = new EventEmitter<string>();

    get users() {
        return this.users$.value;
    }

    users$ = new BehaviorSubject<UserOnUserGridFragment[] | undefined>(
        undefined
    );

    onUserGridClick(id: string) {
        if (id) {
            this.userGridClick.emit(id);
        }
    }
}
