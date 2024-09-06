import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-view-card';

import { UserTableItemPageComponent } from './user-table-item-page/user-table-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: UserTableItemPageComponent
            }
        ])
    ],
    declarations: [UserTableItemPageComponent],
    exports: [UserTableItemPageComponent]
})
export class YourInfiniteStorybookUserRouteUserTableItemPageModule {}
