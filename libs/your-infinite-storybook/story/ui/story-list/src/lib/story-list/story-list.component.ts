import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoryOnStoryListYourInfiniteStorybookStoryUiStoryListFragment as StoryOnStoryList } from './__generated__/story-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-list.component.pug',
    styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
    @Input() set stories(stories: StoryOnStoryList[]) {
        this.stories$.next(stories);
    }

    @Output() readonly storyListClick = new EventEmitter<string>();

    get stories() {
        return this.stories$.value;
    }

    stories$ = new BehaviorSubject<StoryOnStoryList[]>([]);

    onStoryListClick(id: string) {
        if (id) {
            this.storyListClick.emit(id);
        }
    }
}
