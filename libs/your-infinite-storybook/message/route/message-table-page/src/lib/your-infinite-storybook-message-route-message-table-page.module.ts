import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageTableModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-table';

import { MessageTablePageComponent } from './message-table-page/message-table-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageTableModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MessageTablePageComponent
            }
        ])
    ],
    declarations: [MessageTablePageComponent],
    exports: [MessageTablePageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageTablePageModule {}
