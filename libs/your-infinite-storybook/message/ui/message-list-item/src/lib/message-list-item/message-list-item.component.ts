import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageListItemYourInfiniteStorybookMessageUiMessageListItemFragment as MessageOnMessageListItemFragment } from './__generated__/message-list-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-list-item.component.pug',
    styleUrls: ['./message-list-item.component.scss']
})
export class MessageListItemComponent {
    @Input() set message(
        message: MessageOnMessageListItemFragment | undefined
    ) {
        this.message$.next(message);
    }

    get message() {
        return this.message$.value;
    }
    @Output() readonly messageListItemClick = new EventEmitter<string>();

    message$ = new BehaviorSubject<
        MessageOnMessageListItemFragment | undefined
    >(undefined);

    get title() {
        return this.message.id;
    }

    onMessageListItemClick() {
        const id = this.message && this.message.id;
        if (id) {
            this.messageListItemClick.emit(id);
        }
    }
}
