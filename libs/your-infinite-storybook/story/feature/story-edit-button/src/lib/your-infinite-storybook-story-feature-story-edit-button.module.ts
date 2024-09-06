import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryEditButtonComponent } from './story-edit-button/story-edit-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryEditButtonComponent],
    exports: [StoryEditButtonComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryEditButtonModule {}
