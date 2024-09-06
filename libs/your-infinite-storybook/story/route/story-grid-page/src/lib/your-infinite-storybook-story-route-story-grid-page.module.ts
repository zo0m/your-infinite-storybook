import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryGridModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-grid';

import { StoryGridPageComponent } from './story-grid-page/story-grid-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryGridModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryGridPageComponent }
        ])
    ],
    declarations: [StoryGridPageComponent],
    exports: [StoryGridPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryGridPageModule {}
