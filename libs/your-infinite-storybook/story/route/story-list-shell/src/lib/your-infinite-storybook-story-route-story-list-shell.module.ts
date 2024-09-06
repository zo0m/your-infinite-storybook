import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    StoryListPageComponent,
    YourInfiniteStorybookStoryRouteStoryListPageModule
} from '@your-infinite-storybook/your-infinite-storybook/story/route/story-list-page';

import { yourInfiniteStorybookStoryRouteStoryListShellRoutes } from './story-list-shell.routes';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookStoryRouteStoryListPageModule,
        RouterModule.forChild(
            yourInfiniteStorybookStoryRouteStoryListShellRoutes
        )
    ]
})
export class YourInfiniteStorybookStoryRouteStoryListShellModule {}
