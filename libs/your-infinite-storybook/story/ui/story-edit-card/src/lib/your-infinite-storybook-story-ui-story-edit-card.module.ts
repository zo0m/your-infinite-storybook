import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-form-field-select';

import { StoryEditCardComponent } from './story-edit-card/story-edit-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryEditCardComponent],
    exports: [StoryEditCardComponent]
})
export class YourInfiniteStorybookStoryUiStoryEditCardModule {}
