import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryFormFieldLinkModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-form-field-link';

import { StoryFormFieldLinkComponent } from './story-form-field-link/story-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryFormFieldLinkModule
    ],
    declarations: [StoryFormFieldLinkComponent],
    exports: [StoryFormFieldLinkComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryFormFieldLinkModule {}
