import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryUiStoryLinkModule } from '@your-infinite-storybook/your-infinite-storybook/story/ui/story-link';

import { StoryLinkComponent } from './story-link/story-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryUiStoryLinkModule
    ],
    declarations: [StoryLinkComponent],
    exports: [StoryLinkComponent]
})
export class YourInfiniteStorybookStoryFeatureStoryLinkModule {}
