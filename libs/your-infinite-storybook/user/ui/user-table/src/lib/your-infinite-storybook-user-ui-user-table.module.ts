import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserTableCellModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-table-cell';

import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookUserUiUserTableCellModule
    ],
    declarations: [UserTableComponent],
    exports: [UserTableComponent]
})
export class YourInfiniteStorybookUserUiUserTableModule {}
