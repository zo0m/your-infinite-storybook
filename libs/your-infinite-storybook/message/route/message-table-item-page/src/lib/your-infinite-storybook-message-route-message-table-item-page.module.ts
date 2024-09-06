import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-view-card';

import { MessageTableItemPageComponent } from './message-table-item-page/message-table-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MessageTableItemPageComponent
            }
        ])
    ],
    declarations: [MessageTableItemPageComponent],
    exports: [MessageTableItemPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageTableItemPageModule {}
