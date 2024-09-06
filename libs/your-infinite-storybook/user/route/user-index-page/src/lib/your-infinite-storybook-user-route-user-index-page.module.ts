import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserListModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-list';

import { UserIndexPageComponent } from './user-index-page/user-index-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserListModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserIndexPageComponent }
        ])
    ],
    declarations: [UserIndexPageComponent],
    exports: [UserIndexPageComponent]
})
export class YourInfiniteStorybookUserRouteUserIndexPageModule {}
