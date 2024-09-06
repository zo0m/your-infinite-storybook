import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryFormFieldLinkComponent } from './story-form-field-link/story-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryFormFieldLinkComponent],
    exports: [StoryFormFieldLinkComponent]
})
export class YourInfiniteStorybookStoryUiStoryFormFieldLinkModule {}
