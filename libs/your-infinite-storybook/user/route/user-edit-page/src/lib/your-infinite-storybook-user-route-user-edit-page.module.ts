import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-edit-card';

import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserEditCardModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserEditPageComponent }
        ])
    ],
    declarations: [UserEditPageComponent],
    exports: [UserEditPageComponent]
})
export class YourInfiniteStorybookUserRouteUserEditPageModule {}
