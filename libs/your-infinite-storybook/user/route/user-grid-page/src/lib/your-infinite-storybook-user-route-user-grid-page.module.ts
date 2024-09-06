import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserFeatureUserGridModule } from '@your-infinite-storybook/your-infinite-storybook/user/feature/user-grid';

import { UserGridPageComponent } from './user-grid-page/user-grid-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserFeatureUserGridModule,

        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: UserGridPageComponent }
        ])
    ],
    declarations: [UserGridPageComponent],
    exports: [UserGridPageComponent]
})
export class YourInfiniteStorybookUserRouteUserGridPageModule {}
