import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserGridItemComponent } from './user-grid-item/user-grid-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserGridItemComponent],
    exports: [UserGridItemComponent]
})
export class YourInfiniteStorybookUserUiUserGridItemModule {}
