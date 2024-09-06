import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserTableCellComponent } from './user-table-cell/user-table-cell.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserTableCellComponent],
    exports: [UserTableCellComponent]
})
export class YourInfiniteStorybookUserUiUserTableCellModule {}
