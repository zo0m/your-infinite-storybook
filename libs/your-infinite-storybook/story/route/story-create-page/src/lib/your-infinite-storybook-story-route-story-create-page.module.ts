import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-create-card';

import { StoryCreatePageComponent } from './story-create-page/story-create-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryCreateCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryCreatePageComponent }
        ])
    ],
    declarations: [StoryCreatePageComponent],
    exports: [StoryCreatePageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryCreatePageModule {}
