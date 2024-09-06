import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-form-field-select';

import { StoryFormFieldSelectComponent } from './story-form-field-select/story-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryFormFieldSelectModule
    ],
    declarations: [StoryFormFieldSelectComponent],
    exports: [StoryFormFieldSelectComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryFormFieldSelectModule {}
