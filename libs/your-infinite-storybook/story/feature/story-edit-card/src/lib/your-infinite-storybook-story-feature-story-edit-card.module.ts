import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-edit-card';

import { StoryEditCardComponent } from './story-edit-card/story-edit-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryEditCardModule
    ],
    declarations: [StoryEditCardComponent],
    exports: [StoryEditCardComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryEditCardModule {}
