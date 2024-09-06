import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-view-card';

import { MessageGridItemPageComponent } from './message-grid-item-page/message-grid-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MessageGridItemPageComponent
            }
        ])
    ],
    declarations: [MessageGridItemPageComponent],
    exports: [MessageGridItemPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageGridItemPageModule {}
