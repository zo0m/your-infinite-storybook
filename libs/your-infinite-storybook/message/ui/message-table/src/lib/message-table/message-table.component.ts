import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTableFragment as MessageOnMessageTableFragment } from './__generated__/message-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-table.component.pug',
    styleUrls: ['./message-table.component.scss']
})
export class MessageTableComponent {
    @Input() set messages(
        messages: MessageOnMessageTableFragment[] | undefined
    ) {
        this.messages$.next(messages);
    }

    @Output() readonly messageTableClick = new EventEmitter<string>();

    get messages() {
        return this.messages$.value;
    }

    messages$ = new BehaviorSubject<
        MessageOnMessageTableFragment[] | undefined
    >(undefined);

    onMessageTableClick(id: string) {
        if (id) {
            this.messageTableClick.emit(id);
        }
    }
}
