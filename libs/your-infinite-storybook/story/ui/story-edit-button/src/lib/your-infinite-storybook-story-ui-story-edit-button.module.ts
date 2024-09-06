import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryEditButtonComponent } from './story-edit-button/story-edit-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryEditButtonComponent],
    exports: [StoryEditButtonComponent]
})
export class YourInfiniteStorybookStoryUiStoryEditButtonModule {}
