import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';

import { CreateMessageInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-create-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-create-card.component.pug',
    styleUrls: ['./message-create-card.component.scss']
})
export class MessageCreateCardComponent {
    message: CreateMessageInput = {};

    @Output() readonly messageSubmit = new EventEmitter<CreateMessageInput>();

    onClear() {
        this.message = {};
    }

    onSubmit() {
        this.messageSubmit.emit(this.message);
    }
}
