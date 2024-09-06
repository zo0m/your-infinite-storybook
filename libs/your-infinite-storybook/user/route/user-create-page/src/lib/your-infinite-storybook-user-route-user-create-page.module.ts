import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-create-card';

import { UserCreatePageComponent } from './user-create-page/user-create-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserCreateCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserCreatePageComponent }
        ])
    ],
    declarations: [UserCreatePageComponent],
    exports: [UserCreatePageComponent]
})
export class YourInfiniteStorybookUserRouteUserCreatePageModule {}
