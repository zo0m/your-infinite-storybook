import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookStoryFeatureStoryTableModule } from '@your-infinite-storybook/your-infinite-storybook/story/feature/story-table';

import { StoryTablePageComponent } from './story-table-page/story-table-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookStoryFeatureStoryTableModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: StoryTablePageComponent }
        ])
    ],
    declarations: [StoryTablePageComponent],
    exports: [StoryTablePageComponent]
})
export class YourInfiniteStorybookStoryRouteStoryTablePageModule {}
