import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserOnUserViewCardYourInfiniteStorybookUserUiUserViewCardFragment as UserOnUserViewCardFragment } from './__generated__/user-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-view-card.component.pug',
    styleUrls: ['./user-view-card.component.scss']
})
export class UserViewCardComponent {
    @Input() loading = true;
    @Input() set user(user: UserOnUserViewCardFragment | undefined) {
        this.user$.next(user);
    }

    @Output() readonly userViewCardClick = new EventEmitter<string>();

    get user() {
        return this.user$.value;
    }

    user$ = new BehaviorSubject<UserOnUserViewCardFragment | undefined>(
        undefined
    );

    onUserViewCardClick() {
        const id = this.user && this.user.id;
        if (id) {
            this.userViewCardClick.emit(id);
        }
    }
}
