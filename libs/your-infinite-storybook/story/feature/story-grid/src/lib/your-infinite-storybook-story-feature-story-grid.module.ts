import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryGridModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-grid';

import { StoryGridComponent } from './story-grid/story-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryGridModule
    ],
    declarations: [StoryGridComponent],
    exports: [StoryGridComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryGridModule {}
