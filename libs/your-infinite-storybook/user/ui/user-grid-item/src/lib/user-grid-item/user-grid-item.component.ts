import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItemFragment as UserOnUserGridItemFragment } from './__generated__/user-grid-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-grid-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-grid-item.component.pug',
    styleUrls: ['./user-grid-item.component.scss']
})
export class UserGridItemComponent {
    @Input() set user(user: UserOnUserGridItemFragment | undefined) {
        this.user$.next(user);
    }

    @Output() readonly userGridItemClick = new EventEmitter<string>();

    get user() {
        return this.user$.value;
    }

    user$ = new BehaviorSubject<UserOnUserGridItemFragment | undefined>(
        undefined
    );

    onUserGridItemClick() {
        const id = this.user && this.user.id;
        if (id) {
            this.userGridItemClick.emit(id);
        }
    }
}
