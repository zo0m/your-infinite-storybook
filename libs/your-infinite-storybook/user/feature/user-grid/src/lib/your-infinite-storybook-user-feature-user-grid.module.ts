import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserGridModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-grid';

import { UserGridComponent } from './user-grid/user-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserGridModule
    ],
    declarations: [UserGridComponent],
    exports: [UserGridComponent]
})
export class YourInfiniteStorybookUserFeatureUserGridModule {}
