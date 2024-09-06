import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap
} from 'rxjs/operators';

import { MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButtonFragment as MessageFragment } from './__generated__/message-create-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-create-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-create-button.component.pug',
    styleUrls: ['./message-create-button.component.scss']
})
export class MessageCreateButtonComponent implements OnInit {
    @Output() readonly messageSelected = new EventEmitter<MessageFragment>();
    @Output() readonly messageSearched = new EventEmitter<string>();

    @Input() placeholder = 'Search';
    @Input() loading = false;

    @Input() set foundMessages(foundMessages: MessageFragment[]) {
        this.foundMessages$.next(foundMessages);
    }

    get foundMessages() {
        return this.foundMessages$.value;
    }

    @Input() set selectedMessage(message: MessageFragment | null | undefined) {
        this.searchInputControl.setValue(message, { emitEvent: false });
        this.selectedMessage$.next(message);
    }

    get selectedMessage() {
        return this.selectedMessage$.value;
    }

    selectedMessage$ = new BehaviorSubject<MessageFragment | null | undefined>(
        undefined
    );

    foundMessages$ = new BehaviorSubject<MessageFragment[]>([]);

    searchInputControl = new FormControl();

    constructor() {}

    ngOnInit() {
        this.searchInputControl.valueChanges
            .pipe(
                debounceTime(90),
                distinctUntilChanged(),
                tap((search) => {
                    if (typeof search === 'string') {
                        this.messageSearched.emit(search);
                    }
                })
            )
            .subscribe();
    }

    getMessageName(message): string {
        if (typeof message === 'string') {
            return message;
        }

        return message?.name ?? '';
    }

    onMessageSelected($event: MatAutocompleteSelectedEvent) {
        const message = $event.option.value;
        if (message) {
            this.messageSelected.emit(message);
            this.selectedMessage = message;
        }
    }

    clear() {
        this.searchInputControl.setValue('', { emitEvent: false });
    }

    canClear(): boolean {
        return this.getMessageName(this.searchInputControl?.value)?.length > 0;
    }
}
