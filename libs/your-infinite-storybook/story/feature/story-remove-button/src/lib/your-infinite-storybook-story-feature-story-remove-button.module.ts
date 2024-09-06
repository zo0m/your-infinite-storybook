import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryRemoveButtonComponent } from './story-remove-button/story-remove-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryRemoveButtonComponent],
    exports: [StoryRemoveButtonComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryRemoveButtonModule {}
