import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryLinkComponent } from './story-link/story-link.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedUiMaterialModule],
    declarations: [StoryLinkComponent],
    exports: [StoryLinkComponent]
})
export class YourInfiniteStorybookStoryUiStoryLinkModule {}
