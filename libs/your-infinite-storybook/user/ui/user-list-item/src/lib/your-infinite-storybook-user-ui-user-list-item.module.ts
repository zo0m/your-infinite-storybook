import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserListItemComponent } from './user-list-item/user-list-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserListItemComponent],
    exports: [UserListItemComponent]
})
export class YourInfiniteStorybookUserUiUserListItemModule {}
