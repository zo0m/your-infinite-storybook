import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryListModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-list';

import { StoryIndexPageComponent } from './story-index-page/story-index-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryListModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryIndexPageComponent }
        ])
    ],
    declarations: [StoryIndexPageComponent],
    exports: [StoryIndexPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryIndexPageModule {}
