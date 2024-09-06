import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryFormFieldSearchComponent } from './story-form-field-search/story-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryFormFieldSearchComponent],
    exports: [StoryFormFieldSearchComponent]
})
export class YourInfiniteStorybookStoryUiStoryFormFieldSearchModule {}
