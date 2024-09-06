import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryGridItemComponent } from './story-grid-item/story-grid-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryGridItemComponent],
    exports: [StoryGridItemComponent]
})
export class YourInfiniteStorybookStoryUiStoryGridItemModule {}
