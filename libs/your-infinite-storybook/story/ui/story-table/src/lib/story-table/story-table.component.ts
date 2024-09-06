import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTableFragment as StoryOnStoryTableFragment } from './__generated__/story-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-table.component.pug',
    styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent {
    @Input() set stories(stories: StoryOnStoryTableFragment[] | undefined) {
        this.stories$.next(stories);
    }

    @Output() readonly storyTableClick = new EventEmitter<string>();

    get stories() {
        return this.stories$.value;
    }

    stories$ = new BehaviorSubject<StoryOnStoryTableFragment[] | undefined>(
        undefined
    );

    onStoryTableClick(id: string) {
        if (id) {
            this.storyTableClick.emit(id);
        }
    }
}
