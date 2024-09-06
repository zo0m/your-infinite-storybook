import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryTableCellModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-table-cell';

import { StoryTableComponent } from './story-table/story-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryUiStoryTableCellModule
    ],
    declarations: [StoryTableComponent],
    exports: [StoryTableComponent]
})
export class YourInfiniteStorybookStoryUiStoryTableModule {}
