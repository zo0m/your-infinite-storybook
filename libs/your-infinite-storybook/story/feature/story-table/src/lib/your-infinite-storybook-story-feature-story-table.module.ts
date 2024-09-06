import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryTableModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-table';

import { StoryTableComponent } from './story-table/story-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryTableModule
    ],
    declarations: [StoryTableComponent],
    exports: [StoryTableComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryTableModule {}
