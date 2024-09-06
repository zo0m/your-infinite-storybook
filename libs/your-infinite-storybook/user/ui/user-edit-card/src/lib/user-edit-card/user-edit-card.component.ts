import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UpdateUserInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-edit-card.component.pug',
    styleUrls: ['./user-edit-card.component.scss']
})
export class UserEditCardComponent {
    @Input() set user(user: UpdateUserInput | undefined) {
        this.user$.next(user);
    }

    get user() {
        return this.user$.value;
    }

    @Output() readonly userEditCardSave = new EventEmitter<UpdateUserInput>();
    @Output() readonly userEditCardDelete = new EventEmitter<string>();

    user$ = new BehaviorSubject<UpdateUserInput | undefined>(undefined);

    onSave() {
        if (this.user) {
            this.userEditCardSave.emit(this.user);
        }
    }

    onDelete() {
        if (this.user) {
            this.userEditCardDelete.emit(this.user.id);
        }
    }
}
