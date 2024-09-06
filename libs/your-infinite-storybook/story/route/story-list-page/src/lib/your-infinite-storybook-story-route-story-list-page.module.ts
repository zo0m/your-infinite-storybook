import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryListModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-list';

import { StoryListPageComponent } from './story-list-page/story-list-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryListModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryListPageComponent }
        ])
    ],
    declarations: [StoryListPageComponent],
    exports: [StoryListPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryListPageModule {}
