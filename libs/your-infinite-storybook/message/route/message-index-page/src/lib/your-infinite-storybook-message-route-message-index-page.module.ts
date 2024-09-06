import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageListModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-list';

import { MessageIndexPageComponent } from './message-index-page/message-index-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageListModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MessageIndexPageComponent
            }
        ])
    ],
    declarations: [MessageIndexPageComponent],
    exports: [MessageIndexPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageIndexPageModule {}
