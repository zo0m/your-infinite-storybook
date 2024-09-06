import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryViewCardYourInfiniteStorybookStoryUiStoryViewCardFragment as StoryOnStoryViewCardFragment } from './__generated__/story-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-view-card.component.pug',
    styleUrls: ['./story-view-card.component.scss']
})
export class StoryViewCardComponent {
    @Input() loading = true;
    @Input() set story(story: StoryOnStoryViewCardFragment | undefined) {
        this.story$.next(story);
    }

    @Output() readonly storyViewCardClick = new EventEmitter<string>();

    get story() {
        return this.story$.value;
    }

    story$ = new BehaviorSubject<StoryOnStoryViewCardFragment | undefined>(
        undefined
    );

    onStoryViewCardClick() {
        const id = this.story && this.story.id;
        if (id) {
            this.storyViewCardClick.emit(id);
        }
    }
}
