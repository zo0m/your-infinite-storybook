import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryGridItemYourInfiniteStorybookStoryUiStoryGridItemFragment as StoryOnStoryGridItemFragment } from './__generated__/story-grid-item.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-grid-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-grid-item.component.pug',
    styleUrls: ['./story-grid-item.component.scss']
})
export class StoryGridItemComponent {
    @Input() set story(story: StoryOnStoryGridItemFragment | undefined) {
        this.story$.next(story);
    }

    @Output() readonly storyGridItemClick = new EventEmitter<string>();

    get story() {
        return this.story$.value;
    }

    story$ = new BehaviorSubject<StoryOnStoryGridItemFragment | undefined>(
        undefined
    );

    onStoryGridItemClick() {
        const id = this.story && this.story.id;
        if (id) {
            this.storyGridItemClick.emit(id);
        }
    }
}
