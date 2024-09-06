import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageInlineListItemYourInfiniteStorybookMessageUiMessageInlineListItemFragment as MessageOnMessageInlineListItemFragment } from './__generated__/message-inline-list-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-inline-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-inline-list-item.component.pug',
    styleUrls: ['./message-inline-list-item.component.scss']
})
export class MessageInlineListItemComponent {
    @Input() set message(
        message: MessageOnMessageInlineListItemFragment | undefined
    ) {
        this.message$.next(message);
    }

    get message() {
        return this.message$.value;
    }

    @Output() readonly messageInlineListItemClick = new EventEmitter<string>();

    message$ = new BehaviorSubject<
        MessageOnMessageInlineListItemFragment | undefined
    >(undefined);

    get title() {
        return this.message.id;
    }

    onMessageInlineListItemClick() {
        const id = this.message && this.message.id;
        if (id) {
            this.messageInlineListItemClick.emit(id);
        }
    }
}
