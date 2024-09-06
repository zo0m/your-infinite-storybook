import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageListModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-list';

import { MessageListPageComponent } from './message-list-page/message-list-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageListModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: MessageListPageComponent }
        ])
    ],
    declarations: [MessageListPageComponent],
    exports: [MessageListPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageListPageModule {}
