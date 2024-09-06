import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserListItemModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-list-item';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookUserUiUserListItemModule
    ],
    declarations: [UserListComponent],
    exports: [UserListComponent]
})
export class YourInfiniteStorybookUserUiUserListModule {}
