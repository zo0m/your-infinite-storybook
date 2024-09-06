import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryListItemComponent } from './story-list-item/story-list-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryListItemComponent],
    exports: [StoryListItemComponent]
})
export class YourInfiniteStorybookStoryUiStoryListItemModule {}
