import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import { CreateStoryInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import {
    CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardGQL as CreateStoryGQL,
    GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardGQL as GenerateStoryGQL
} from './__generated__/story-create-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-create-card',
    templateUrl: './story-create-card.component.pug',
    styleUrls: ['./story-create-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryCreateCardComponent {
    @Output() readonly storyCreate = new EventEmitter<string>();

    loading$ = new BehaviorSubject<boolean>(false);

    set loading(loading: boolean) {
        this.loading$.next(loading);
    }

    get loading() {
        return this.loading$.value;
    }

    constructor(
        private createStoryGQL: CreateStoryGQL,
        private generateStoryGQL: GenerateStoryGQL
    ) {}

    onStorySubmit(story: CreateStoryInput) {
        this.createStory(story);
    }

    onStoryGenerate(story: CreateStoryInput) {
        this.generateStory(story);
    }

    async generateStory(story: CreateStoryInput) {
        try {
            this.loading = true;
            const result = await this.generateStoryGQL
                .mutate(
                    { story },
                    {
                        refetchQueries: 'active'
                    }
                )
                .toPromise();

            const createdStory = result?.data?.storyGenerate;
            this.loading = false;

            if (createdStory?.id) {
                this.storyCreate.emit(createdStory.id);
            }
        } catch (error) {
            console.log(`createStory() error = ${error}`);
            throw error;
        }
    }

    async createStory(story: CreateStoryInput) {
        try {
            this.loading = true;
            const result = await firstValueFrom(
                this.createStoryGQL.mutate({ story })
            );

            const [createdStory] = result?.data?.storiesCreate ?? [];
            this.loading = false;

            if (createdStory?.id) {
                this.storyCreate.emit(createdStory.id);
            }
        } catch (error) {
            console.log(`createStory() error = ${error}`);
            throw error;
        }
    }
}
