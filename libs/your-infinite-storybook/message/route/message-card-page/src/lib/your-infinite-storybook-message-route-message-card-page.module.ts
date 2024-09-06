import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-view-card';

import { MessageCardPageComponent } from './message-card-page/message-card-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageViewCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: MessageCardPageComponent }
        ])
    ],
    declarations: [MessageCardPageComponent],
    exports: [MessageCardPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageCardPageModule {}
