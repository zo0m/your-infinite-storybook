import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryFormFieldLinkModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-form-field-link';

import { MessageViewCardComponent } from './message-view-card/message-view-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryFeatureStoryFormFieldLinkModule
    ],
    declarations: [MessageViewCardComponent],
    exports: [MessageViewCardComponent]
})
export class YourInfiniteStorybookMessageUiMessageViewCardModule {}
