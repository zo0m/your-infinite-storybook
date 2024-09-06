import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageListYourInfiniteStorybookMessageUiMessageListFragment as MessageOnMessageList } from './__generated__/message-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-list.component.pug',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
    @Input() set messages(messages: MessageOnMessageList[]) {
        this.messages$.next(messages);
    }

    @Output() readonly messageListClick = new EventEmitter<string>();

    get messages() {
        return this.messages$.value;
    }

    messages$ = new BehaviorSubject<MessageOnMessageList[]>([]);

    onMessageListClick(id: string) {
        if (id) {
            this.messageListClick.emit(id);
        }
    }
}
