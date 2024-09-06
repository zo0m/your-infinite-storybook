import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryLoaderComponent } from './story-loader/story-loader.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryLoaderComponent],
    exports: [StoryLoaderComponent]
})
export class YourInfiniteStorybookStoryUiStoryLoaderModule {}
