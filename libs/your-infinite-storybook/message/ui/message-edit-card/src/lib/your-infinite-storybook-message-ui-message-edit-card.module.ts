import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-form-field-select';

import { MessageEditCardComponent } from './message-edit-card/message-edit-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryFeatureStoryFormFieldSelectModule
    ],
    declarations: [MessageEditCardComponent],
    exports: [MessageEditCardComponent]
})
export class YourInfiniteStorybookMessageUiMessageEditCardModule {}
