import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryGridItemModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-grid-item';

import { StoryGridComponent } from './story-grid/story-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryUiStoryGridItemModule
    ],
    declarations: [StoryGridComponent],
    exports: [StoryGridComponent]
})
export class YourInfiniteStorybookStoryUiStoryGridModule {}
