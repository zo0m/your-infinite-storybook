import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageFeatureMessageCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/feature/message-create-card';

import { MessageCreatePageComponent } from './message-create-page/message-create-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageFeatureMessageCreateCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MessageCreatePageComponent
            }
        ])
    ],
    declarations: [MessageCreatePageComponent],
    exports: [MessageCreatePageComponent]
})
export class YourInfiniteStorybookMessageRouteMessageCreatePageModule {}
