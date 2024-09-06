import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-edit-card';

import { MessageEditPageComponent } from './message-edit-page/message-edit-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageEditCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: MessageEditPageComponent }
        ])
    ],
    declarations: [MessageEditPageComponent],
    exports: [MessageEditPageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageEditPageModule {}
