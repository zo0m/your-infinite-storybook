import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';

import { CreateStoryInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-create-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-create-card.component.pug',
    styleUrls: ['./story-create-card.component.scss']
})
export class StoryCreateCardComponent {
    story: CreateStoryInput = {};

    @Output() readonly storySubmit = new EventEmitter<CreateStoryInput>();
    @Output() readonly storyGenerate = new EventEmitter<CreateStoryInput>();

    onClear() {
        this.story = {};
    }

    onGenerate() {
        this.storyGenerate.emit(this.story);
    }

    onSubmit() {
        this.storySubmit.emit(this.story);
    }
}
