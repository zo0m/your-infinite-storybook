import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserTreeStateService } from './user-tree-state/user-tree-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [UserTreeStateService]
})
export class YourInfiniteStorybookUserUtilsUserTreeStateModule {}
