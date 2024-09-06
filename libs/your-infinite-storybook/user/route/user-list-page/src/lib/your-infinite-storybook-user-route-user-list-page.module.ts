import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserListModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-list';

import { UserListPageComponent } from './user-list-page/user-list-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserListModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserListPageComponent }
        ])
    ],
    declarations: [UserListPageComponent],
    exports: [UserListPageComponent]
})
export class YourInfiniteStorybookUserRouteUserListPageModule {}
