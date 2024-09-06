import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageInlineListModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-inline-list';
import { YourInfiniteStorybookStoryFeatureStoryViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-view-card';

import { StoryListItemPageComponent } from './story-list-item-page/story-list-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookStoryFeatureStoryViewCardModule,
        YourInfiniteStorybookMessageFeatureMessageInlineListModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: StoryListItemPageComponent
            }
        ])
    ],
    declarations: [StoryListItemPageComponent],
    exports: [StoryListItemPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryListItemPageModule {}
