import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCardFragment as MessageOnMessageViewCardFragment } from './__generated__/message-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-view-card.component.pug',
    styleUrls: ['./message-view-card.component.scss']
})
export class MessageViewCardComponent {
    @Input() loading = true;
    @Input() set message(
        message: MessageOnMessageViewCardFragment | undefined
    ) {
        this.message$.next(message);
    }

    @Output() readonly messageViewCardClick = new EventEmitter<string>();

    get message() {
        return this.message$.value;
    }

    message$ = new BehaviorSubject<
        MessageOnMessageViewCardFragment | undefined
    >(undefined);

    onMessageViewCardClick() {
        const id = this.message && this.message.id;
        if (id) {
            this.messageViewCardClick.emit(id);
        }
    }
}
