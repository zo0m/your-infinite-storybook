import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGridFragment as StoryOnStoryGridFragment } from './__generated__/story-grid.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-grid.component.pug',
    styleUrls: ['./story-grid.component.scss']
})
export class StoryGridComponent {
    @Input() set stories(stories: StoryOnStoryGridFragment[] | undefined) {
        this.stories$.next(stories);
    }

    @Output() readonly storyGridClick = new EventEmitter<string>();

    get stories() {
        return this.stories$.value;
    }

    stories$ = new BehaviorSubject<StoryOnStoryGridFragment[] | undefined>(
        undefined
    );

    onStoryGridClick(id: string) {
        if (id) {
            this.storyGridClick.emit(id);
        }
    }
}
