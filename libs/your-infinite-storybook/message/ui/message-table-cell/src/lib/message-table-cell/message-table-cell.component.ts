import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageTableCellYourInfiniteStorybookMessageUiMessageTableCellFragment as MessageOnMessageTableCellFragment } from './__generated__/message-table-cell.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-table-cell',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-table-cell.component.pug',
    styleUrls: ['./message-table-cell.component.scss']
})
export class MessageTableCellComponent {
    @Input() set message(
        message: MessageOnMessageTableCellFragment | undefined
    ) {
        this.message$.next(message);
    }

    @Output() readonly messageTableCellClick = new EventEmitter<string>();

    get message() {
        return this.message$.value;
    }

    message$ = new BehaviorSubject<
        MessageOnMessageTableCellFragment | undefined
    >(undefined);

    onMessageTableCellClick() {
        const id = this.message && this.message.id;
        if (id) {
            this.messageTableCellClick.emit(id);
        }
    }
}
