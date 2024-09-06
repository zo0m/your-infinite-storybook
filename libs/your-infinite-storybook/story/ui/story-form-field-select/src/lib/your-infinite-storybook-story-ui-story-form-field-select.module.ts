import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryFormFieldSelectComponent } from './story-form-field-select/story-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryFormFieldSelectComponent],
    exports: [StoryFormFieldSelectComponent]
})
export class YourInfiniteStorybookStoryUiStoryFormFieldSelectModule {}
