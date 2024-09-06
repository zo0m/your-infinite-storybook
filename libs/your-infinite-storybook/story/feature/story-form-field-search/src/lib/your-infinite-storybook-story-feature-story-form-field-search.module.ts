import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryFormFieldSearchModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-form-field-search';

import { StoryFormFieldSearchComponent } from './story-form-field-search/story-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryFormFieldSearchModule
    ],
    declarations: [StoryFormFieldSearchComponent],
    exports: [StoryFormFieldSearchComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryFormFieldSearchModule {}
