import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-view-card';

import { StoryGridItemPageComponent } from './story-grid-item-page/story-grid-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: StoryGridItemPageComponent
            }
        ])
    ],
    declarations: [StoryGridItemPageComponent],
    exports: [StoryGridItemPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryGridItemPageModule {}
