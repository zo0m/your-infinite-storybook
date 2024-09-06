import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCellFragment as StoryOnStoryTableCellFragment } from './__generated__/story-table-cell.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-table-cell',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-table-cell.component.pug',
    styleUrls: ['./story-table-cell.component.scss']
})
export class StoryTableCellComponent {
    @Input() set story(story: StoryOnStoryTableCellFragment | undefined) {
        this.story$.next(story);
    }

    @Output() readonly storyTableCellClick = new EventEmitter<string>();

    get story() {
        return this.story$.value;
    }

    story$ = new BehaviorSubject<StoryOnStoryTableCellFragment | undefined>(
        undefined
    );

    onStoryTableCellClick() {
        const id = this.story && this.story.id;
        if (id) {
            this.storyTableCellClick.emit(id);
        }
    }
}
