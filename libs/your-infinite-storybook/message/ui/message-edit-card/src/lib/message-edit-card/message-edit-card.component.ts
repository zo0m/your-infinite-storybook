import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UpdateMessageInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-edit-card.component.pug',
    styleUrls: ['./message-edit-card.component.scss']
})
export class MessageEditCardComponent {
    @Input() set message(message: UpdateMessageInput | undefined) {
        this.message$.next(message);
    }

    get message() {
        return this.message$.value;
    }

    @Output() readonly messageEditCardSave =
        new EventEmitter<UpdateMessageInput>();
    @Output() readonly messageEditCardDelete = new EventEmitter<string>();

    message$ = new BehaviorSubject<UpdateMessageInput | undefined>(undefined);

    onSave() {
        if (this.message) {
            this.messageEditCardSave.emit(this.message);
        }
    }

    onDelete() {
        if (this.message) {
            this.messageEditCardDelete.emit(this.message.id);
        }
    }
}
