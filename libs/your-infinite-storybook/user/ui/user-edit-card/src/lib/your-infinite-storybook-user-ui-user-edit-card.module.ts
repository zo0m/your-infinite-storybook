import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserEditCardComponent } from './user-edit-card/user-edit-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserEditCardComponent],
    exports: [UserEditCardComponent]
})
export class YourInfiniteStorybookUserUiUserEditCardModule {}
