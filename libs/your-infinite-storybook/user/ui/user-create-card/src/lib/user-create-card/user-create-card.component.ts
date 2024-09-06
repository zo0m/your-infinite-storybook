import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';

import { CreateUserInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-create-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-create-card.component.pug',
    styleUrls: ['./user-create-card.component.scss']
})
export class UserCreateCardComponent {
    user: CreateUserInput = {};

    @Output() readonly userSubmit = new EventEmitter<CreateUserInput>();

    onClear() {
        this.user = {};
    }

    onSubmit() {
        this.userSubmit.emit(this.user);
    }
}
