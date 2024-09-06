import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-view-card';

import { UserGridItemPageComponent } from './user-grid-item-page/user-grid-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: UserGridItemPageComponent
            }
        ])
    ],
    declarations: [UserGridItemPageComponent],
    exports: [UserGridItemPageComponent]
})
export class YourInfiniteStorybookUserRouteUserGridItemPageModule {}
