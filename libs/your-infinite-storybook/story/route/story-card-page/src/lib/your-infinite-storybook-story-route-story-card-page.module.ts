import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageListModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-list';
import { YourInfiniteStorybookStoryFeatureStoryViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-view-card';

import { StoryCardPageComponent } from './story-card-page/story-card-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryViewCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryCardPageComponent }
        ])
    ],
    declarations: [StoryCardPageComponent],
    exports: [StoryCardPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryCardPageModule {}
