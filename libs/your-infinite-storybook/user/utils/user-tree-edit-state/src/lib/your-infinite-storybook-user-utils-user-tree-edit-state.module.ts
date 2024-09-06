import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserTreeEditStateService } from './user-tree-edit-state/user-tree-edit-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [UserTreeEditStateService]
})
export class YourInfiniteStorybookUserUtilsUserTreeEditStateModule {}
