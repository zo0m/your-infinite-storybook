import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserGridItemModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-grid-item';

import { UserGridComponent } from './user-grid/user-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookUserUiUserGridItemModule
    ],
    declarations: [UserGridComponent],
    exports: [UserGridComponent]
})
export class YourInfiniteStorybookUserUiUserGridModule {}
