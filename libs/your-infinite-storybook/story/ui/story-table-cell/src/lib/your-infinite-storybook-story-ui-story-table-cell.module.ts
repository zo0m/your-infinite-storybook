import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryTableCellComponent } from './story-table-cell/story-table-cell.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryTableCellComponent],
    exports: [StoryTableCellComponent]
})
export class YourInfiniteStorybookStoryUiStoryTableCellModule {}
