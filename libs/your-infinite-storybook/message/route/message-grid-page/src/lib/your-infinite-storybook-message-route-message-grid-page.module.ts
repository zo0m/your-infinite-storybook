import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageGridModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-grid';

import { MessageGridPageComponent } from './message-grid-page/message-grid-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageGridModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: MessageGridPageComponent }
        ])
    ],
    declarations: [MessageGridPageComponent],
    exports: [MessageGridPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageGridPageModule {}
