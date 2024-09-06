import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItemFragment as MessageOnMessageGridItemFragment } from './__generated__/message-grid-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-grid-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-grid-item.component.pug',
    styleUrls: ['./message-grid-item.component.scss']
})
export class MessageGridItemComponent {
    @Input() set message(
        message: MessageOnMessageGridItemFragment | undefined
    ) {
        this.message$.next(message);
    }

    @Output() readonly messageGridItemClick = new EventEmitter<string>();

    get message() {
        return this.message$.value;
    }

    message$ = new BehaviorSubject<
        MessageOnMessageGridItemFragment | undefined
    >(undefined);

    onMessageGridItemClick() {
        const id = this.message && this.message.id;
        if (id) {
            this.messageGridItemClick.emit(id);
        }
    }
}
