import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserTableModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-table';

import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserTableModule
    ],
    declarations: [UserTableComponent],
    exports: [UserTableComponent]
})
export class YourInfiniteStorybookUserFeatureUserTableModule {}
