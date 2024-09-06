import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-view-card';

import { StoryTableItemPageComponent } from './story-table-item-page/story-table-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: StoryTableItemPageComponent
            }
        ])
    ],
    declarations: [StoryTableItemPageComponent],
    exports: [StoryTableItemPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryTableItemPageModule {}
