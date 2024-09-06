import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineListFragment as MessageOnMessageInlineList } from './__generated__/message-inline-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-inline-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-inline-list.component.pug',
    styleUrls: ['./message-inline-list.component.scss']
})
export class MessageInlineListComponent {
    @Input() set messages(messages: MessageOnMessageInlineList[]) {
        this.messages$.next(messages);
    }

    get messages() {
        return this.messages$.value;
    }
    @Output() readonly messageInlineListClick = new EventEmitter<string>();

    messages$ = new BehaviorSubject<MessageOnMessageInlineList[]>([]);

    onMessageInlineListClick(id: string) {
        if (id) {
            this.messageInlineListClick.emit(id);
        }
    }
}
