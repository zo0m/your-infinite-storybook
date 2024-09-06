import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryListItemYourInfiniteStorybookStoryUiStoryListItemFragment as StoryOnStoryListItemFragment } from './__generated__/story-list-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-list-item.component.pug',
    styleUrls: ['./story-list-item.component.scss']
})
export class StoryListItemComponent {
    @Input() set story(story: StoryOnStoryListItemFragment | undefined) {
        this.story$.next(story);
    }

    @Output() readonly storyListItemClick = new EventEmitter<string>();

    get story() {
        return this.story$.value;
    }

    story$ = new BehaviorSubject<StoryOnStoryListItemFragment | undefined>(
        undefined
    );

    get title() {
        return this.story.title || this.story.id;
    }

    onStoryListItemClick() {
        const id = this.story && this.story.id;
        if (id) {
            this.storyListItemClick.emit(id);
        }
    }
}
