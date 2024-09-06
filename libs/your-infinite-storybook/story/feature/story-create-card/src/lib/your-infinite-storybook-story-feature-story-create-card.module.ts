import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-create-card';

import { StoryCreateCardComponent } from './story-create-card/story-create-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryCreateCardModule
    ],
    declarations: [StoryCreateCardComponent],
    exports: [StoryCreateCardComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryCreateCardModule {}
