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

import { StoryOnStoryCreateButtonYourInfiniteStorybookStoryUiStoryCreateButtonFragment as StoryFragment } from './__generated__/story-create-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-create-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-create-button.component.pug',
    styleUrls: ['./story-create-button.component.scss']
})
export class StoryCreateButtonComponent implements OnInit {
    @Output() readonly storySelected = new EventEmitter<StoryFragment>();
    @Output() readonly storySearched = new EventEmitter<string>();

    @Input() placeholder = 'Search';
    @Input() loading = false;

    @Input() set foundStories(foundStories: StoryFragment[]) {
        this.foundStories$.next(foundStories);
    }

    get foundStories() {
        return this.foundStories$.value;
    }

    @Input() set selectedStory(story: StoryFragment | null | undefined) {
        this.searchInputControl.setValue(story, { emitEvent: false });
        this.selectedStory$.next(story);
    }

    get selectedStory() {
        return this.selectedStory$.value;
    }

    selectedStory$ = new BehaviorSubject<StoryFragment | null | undefined>(
        undefined
    );

    foundStories$ = new BehaviorSubject<StoryFragment[]>([]);

    searchInputControl = new FormControl();

    constructor() {}

    ngOnInit() {
        this.searchInputControl.valueChanges
            .pipe(
                debounceTime(90),
                distinctUntilChanged(),
                tap((search) => {
                    if (typeof search === 'string') {
                        this.storySearched.emit(search);
                    }
                })
            )
            .subscribe();
    }

    getStoryName(story): string {
        if (typeof story === 'string') {
            return story;
        }

        return story?.name ?? '';
    }

    onStorySelected($event: MatAutocompleteSelectedEvent) {
        const story = $event.option.value;
        if (story) {
            this.storySelected.emit(story);
            this.selectedStory = story;
        }
    }

    clear() {
        this.searchInputControl.setValue('', { emitEvent: false });
    }

    canClear(): boolean {
        return this.getStoryName(this.searchInputControl?.value)?.length > 0;
    }
}
