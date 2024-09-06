import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-view-card';

import { UserListItemPageComponent } from './user-list-item-page/user-list-item-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserViewCardModule,

        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: UserListItemPageComponent
            }
        ])
    ],
    declarations: [UserListItemPageComponent],
    exports: [UserListItemPageComponent]
})
export class YourInfiniteStorybookUserRouteUserListItemPageModule {}
