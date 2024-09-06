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

import { UserOnUserCreateButtonYourInfiniteStorybookUserUiUserCreateButtonFragment as UserFragment } from './__generated__/user-create-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-create-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-create-button.component.pug',
    styleUrls: ['./user-create-button.component.scss']
})
export class UserCreateButtonComponent implements OnInit {
    @Output() readonly userSelected = new EventEmitter<UserFragment>();
    @Output() readonly userSearched = new EventEmitter<string>();

    @Input() placeholder = 'Search';
    @Input() loading = false;

    @Input() set foundUsers(foundUsers: UserFragment[]) {
        this.foundUsers$.next(foundUsers);
    }

    get foundUsers() {
        return this.foundUsers$.value;
    }

    @Input() set selectedUser(user: UserFragment | null | undefined) {
        this.searchInputControl.setValue(user, { emitEvent: false });
        this.selectedUser$.next(user);
    }

    get selectedUser() {
        return this.selectedUser$.value;
    }

    selectedUser$ = new BehaviorSubject<UserFragment | null | undefined>(
        undefined
    );

    foundUsers$ = new BehaviorSubject<UserFragment[]>([]);

    searchInputControl = new FormControl();

    constructor() {}

    ngOnInit() {
        this.searchInputControl.valueChanges
            .pipe(
                debounceTime(90),
                distinctUntilChanged(),
                tap((search) => {
                    if (typeof search === 'string') {
                        this.userSearched.emit(search);
                    }
                })
            )
            .subscribe();
    }

    getUserName(user): string {
        if (typeof user === 'string') {
            return user;
        }

        return user?.name ?? '';
    }

    onUserSelected($event: MatAutocompleteSelectedEvent) {
        const user = $event.option.value;
        if (user) {
            this.userSelected.emit(user);
            this.selectedUser = user;
        }
    }

    clear() {
        this.searchInputControl.setValue('', { emitEvent: false });
    }

    canClear(): boolean {
        return this.getUserName(this.searchInputControl?.value)?.length > 0;
    }
}
