import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageFormFieldLinkModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-form-field-link';

import { StoryViewCardComponent } from './story-view-card/story-view-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [StoryViewCardComponent],
    exports: [StoryViewCardComponent]
})
export class YourInfiniteStorybookStoryUiStoryViewCardModule {}
