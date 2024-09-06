import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UpdateStoryInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-edit-card.component.pug',
    styleUrls: ['./story-edit-card.component.scss']
})
export class StoryEditCardComponent {
    @Input() set story(story: UpdateStoryInput | undefined) {
        this.story$.next(story);
    }

    get story() {
        return this.story$.value;
    }

    @Output() readonly storyEditCardSave = new EventEmitter<UpdateStoryInput>();
    @Output() readonly storyEditCardDelete = new EventEmitter<string>();

    story$ = new BehaviorSubject<UpdateStoryInput | undefined>(undefined);

    onSave() {
        if (this.story) {
            this.storyEditCardSave.emit(this.story);
        }
    }

    onDelete() {
        if (this.story) {
            this.storyEditCardDelete.emit(this.story.id);
        }
    }
}
