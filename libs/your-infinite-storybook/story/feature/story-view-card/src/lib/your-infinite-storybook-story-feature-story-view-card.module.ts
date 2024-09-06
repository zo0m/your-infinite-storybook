import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-view-card';

import { StoryViewCardComponent } from './story-view-card/story-view-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryViewCardModule
    ],
    declarations: [StoryViewCardComponent],
    exports: [StoryViewCardComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryViewCardModule {}
