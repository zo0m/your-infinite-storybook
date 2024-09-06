import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-edit-card';

import { StoryEditPageComponent } from './story-edit-page/story-edit-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryEditCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryEditPageComponent }
        ])
    ],
    declarations: [StoryEditPageComponent],
    exports: [StoryEditPageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryEditPageModule {}
