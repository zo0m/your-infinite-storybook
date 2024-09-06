import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGridFragment as MessageOnMessageGridFragment } from './__generated__/message-grid.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-grid.component.pug',
    styleUrls: ['./message-grid.component.scss']
})
export class MessageGridComponent {
    @Input() set messages(
        messages: MessageOnMessageGridFragment[] | undefined
    ) {
        this.messages$.next(messages);
    }

    @Output() readonly messageGridClick = new EventEmitter<string>();

    get messages() {
        return this.messages$.value;
    }

    messages$ = new BehaviorSubject<MessageOnMessageGridFragment[] | undefined>(
        undefined
    );

    onMessageGridClick(id: string) {
        if (id) {
            this.messageGridClick.emit(id);
        }
    }
}
