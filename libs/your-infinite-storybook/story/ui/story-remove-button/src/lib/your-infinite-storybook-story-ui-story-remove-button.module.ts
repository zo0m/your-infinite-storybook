import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryRemoveButtonComponent } from './story-remove-button/story-remove-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryRemoveButtonComponent],
    exports: [StoryRemoveButtonComponent]
})
export class YourInfiniteStorybookStoryUiStoryRemoveButtonModule {}
