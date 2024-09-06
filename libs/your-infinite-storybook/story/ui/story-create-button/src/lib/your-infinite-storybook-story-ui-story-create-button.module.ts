import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { StoryCreateButtonComponent } from './story-create-button/story-create-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [StoryCreateButtonComponent],
    exports: [StoryCreateButtonComponent]
})
export class YourInfiniteStorybookStoryUiStoryCreateButtonModule {}
