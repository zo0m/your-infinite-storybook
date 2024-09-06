import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserTableModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-table';

import { UserTablePageComponent } from './user-table-page/user-table-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserTableModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserTablePageComponent }
        ])
    ],
    declarations: [UserTablePageComponent],
    exports: [UserTablePageComponent]
})
export class YourInfiniteStorybookUserRouteUserTablePageModule {}
