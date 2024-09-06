import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-form-field-select';

import { StoryCreateCardComponent } from './story-create-card/story-create-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryCreateCardComponent],
    exports: [StoryCreateCardComponent]
})
export class YourInfiniteStorybookStoryUiStoryCreateCardModule {}
