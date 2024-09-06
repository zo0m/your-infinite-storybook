import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryListItemModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-list-item';

import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryUiStoryListItemModule
    ],
    declarations: [StoryListComponent],
    exports: [StoryListComponent]
})
export class YourInfiniteStorybookStoryUiStoryListModule {}
